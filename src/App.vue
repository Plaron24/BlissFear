<template>
  <div id="app">
    <HeaderComponent />
    <NavigationBar />
    <main>
      <HomeView />
      <!--WelcomeBanner />
      <About />
      <Music />
      <TourDates />
      <Gallery /-->
    </main>
  </div>
</template>

<script>
import 'bulma/css/bulma.css';
import HeaderComponent from './components/HeaderComponent.vue'
import NavigationBar from './components/NavigationBar.vue'
import HomeView from './views/HomeView.vue'
/*import WelcomeBanner from './components/WelcomeBanner.vue'
import About from './components/About.vue'
import Music from './components/Music.vue'
import TourDates from './components/TourDates.vue'
import Gallery from './components/Gallery.vue'
*/
export default {
  name: 'App',
  components: {
    HeaderComponent,
    NavigationBar,
    HomeView/*,
    WelcomeBanner,
    About,
    Music,
    TourDates,
    Gallery*/
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  color: #333;
}
main {
  padding: 20px;
}
</style>
