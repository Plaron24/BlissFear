<template>
  <table class="table is-striped is-hoverable is-fullwidth">	
    <tr>
      <th>Wann?</th>
      <th>Wo?</th>
      <th>Anreise</th>
    </tr>
    <tr v-for="(date, index) in data" :key="index">
      <td>{{ date.wann }}</td>
      <td>{{ date.wo }}</td>
      <td><a :href="date.anreise" target="_blank">Google Maps</a></td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'TourDates',
  data() {
    return {
      data: [
        { wann: '2025-03-01', wo: 'Berlin', anreise: 'https://maps.app.goo.gl/scKeddx8uW1KZEBY8' },
        { wann: '2025-03-15', wo: 'Hamburg', anreise: 'https://maps.app.goo.gl/1VcSZitGHFNdyuNP6' },
      ]
    }
  }
}
</script>
