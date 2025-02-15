<template>
  <div class="fixed-grid has-2-cols">
    <div class="grid">
      <div class="cell">
        <a href="https://www.instagram.com" target="_blank" class="social-icon instagram box has-text-centered is-rounded">
          <span class="icon-name">Instagram</span>
        </a>
      </div>
      <div class="cell">
        <a href="https://www.tiktok.com" target="_blank" class="social-icon tiktok box has-text-centered is-rounded">
          <span class="icon-name">TikTok</span>
        </a>
      </div>
      <div class="cell">
        <a href="https://www.youtube.com" target="_blank" class="social-icon youtube box has-text-centered is-rounded">
          <span class="icon-name">YouTube</span>
        </a>
      </div>
      <div class="cell">
        <a href="https://www.spotify.com" target="_blank" class="social-icon spotify box has-text-centered is-rounded">
          <span class="icon-name">Spotify</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SocialMedia',
}
</script>

<style scoped>

.social-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-weight: bold;
  font-size: 1.2rem;
  color: white; /* Weißer Text */
  transition: all 0.3s ease;
  text-decoration: none;
  padding: 20px;
  border: 2px solid #333; /* Einheitlicher, dunkler Rahmen */
}

.social-icon:hover {
  transform: scale(1.05);
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
  border-color: #000; /* Dunklerer Rahmen beim Hover */
}

.social-icon .icon-name {
  font-size: 1.2rem;
}

/* Einheitlicher Rahmen für alle Icons */
.instagram {
  border-color: #e1306c; /* Instagram Rahmenfarbe */
}

.tiktok {
  border-color: #69c9d0; /* TikTok Rahmenfarbe */
}

.youtube {
  border-color: #ff0000; /* YouTube Rahmenfarbe */
}

.spotify {
  border-color: #1db954; /* Spotify Rahmenfarbe */
}

.social-icon:hover {
  border-color: #333; /* Einheitlicher dunklerer Hover-Rahmen */
}

</style>
