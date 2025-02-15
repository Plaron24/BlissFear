<template>
  <div class="fixed-grid has-1-cols-mobile has-3-cols-tablet">
    <div class="grid">
      <div class="cell">
        <p class="title is-4">Termine</p>
        <TourDates />
      </div>
      <div class="cell">
        <p class="title is-4">Social Media</p>
        <SocialMedia />
      </div>
      <div class="cell">
        <p class="title is-4">Spotify</p>
        <SpotifyIntegration />
      </div>
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
