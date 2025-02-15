<template>
	<div class="columns">
		<div class="column is-12-mobile is-4-tablet">
			<p class="title is-4">Termine</p>
			<TourDates />
		</div>
		<div class="column is-12-mobile is-4-tablet">
			<p class="title is-4">Social Media</p>
			<SocialMedia />
		</div>
		<div class="column is-12-mobile is-4-tablet">
			<p class="title is-4">Spotify</p>
			<SpotifyIntegration />
		</div>
	</div>
</template>

<script>
import TourDates from '../components/TourDates.vue'
import SocialMedia from '../components/SocialMedia.vue'
import SpotifyIntegration from '../components/SpotifyIntegration.vue'

export default {
  name: 'HomeView',
  components: {
    TourDates,
	SocialMedia,
    SpotifyIntegration
  }
}
</script>
