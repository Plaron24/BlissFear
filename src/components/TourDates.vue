<template>
  <table class="table is-striped is-hoverable is-fullwidth">	
    <tr>
      <th>Datum</th>
      <th>Stadt</th>
      <th>Location</th>
      <th>Anreise</th>
    </tr>
    <tr v-for="(event, index) in events" :key="index">
      <td>{{ event.date }}</td>
      <td>{{ event.city }}</td>
      <td>{{ event.location }}</td>
      <td><a :href="event.mapsLink" target="_blank">Google Maps</a></td>
    </tr>
  </table>
  <p class="text-white is-5">Möchtest du dein Event in der Liste ergänzen? Kontaktiere uns <a href="mailto:bewerbung@blissfear.com">hier</a></p>
</template>

<script>
export default {
  name: "TourDates",
  data() {
    return {
      events: [],
    };
  },
  mounted() {
    this.loadCSV();
  },
  methods: {
	getDateString(date) {
		const hasTime = date.length > 10 ? true : false;
		if (hasTime) {
			return new Date(date.trim()).toLocaleString(navigator.language, { 
				day: "2-digit", 
				month: "2-digit", 
				year: "numeric", 
				hour: "2-digit", 
				minute: "2-digit"
			}) + ' Uhr';
		}
		return new Date(date.trim()).toLocaleString(navigator.language, { 
				day: "2-digit", 
				month: "2-digit", 
				year: "numeric"
			});
	},
    async loadCSV() {
      try {
        const response = await fetch(`${process.env.BASE_URL}/data/events.csv`);
        const text = await response.text();
        const rows = text.split("\n").slice(1);

        this.events = rows.map((row) => {
          const [date, city, location, mapsLink] = row.split(",");
          return {
            date: date ? this.getDateString(date.trim()) : "",
            city: city ? city.trim() : "",
            location: location ? location.trim() : "",
            mapsLink: mapsLink ? mapsLink.trim() : "",
          };
        });
      } catch (error) {
        console.error("Fehler beim Laden der CSV:", error);
      }
    },
  },
};
</script>

<style>
	.text-white {
		color: white;
	}
</style>
