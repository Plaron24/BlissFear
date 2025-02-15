<template>
  <div id="app" class="flex flex-col min-h-screen">
    <HeaderComponent />
    <NavigationBar />
    <main class="flex-grow">
      <router-view></router-view>
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import 'bulma/css/bulma.css';
import HeaderComponent from './components/HeaderComponent.vue';
import NavigationBar from './components/NavigationBar.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    NavigationBar,
    FooterComponent,
  },
};
</script>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
}

main {
  flex-grow: 1;
  padding: 20px;
}
</style>
