import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
// Importiere hier weitere Views, z. B.:
// import AboutView from '../views/AboutView.vue';

const routes = [
  { path: '/', component: HomeView },
  // Beispiel für weitere Seiten:
  // { path: '/about', component: AboutView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
