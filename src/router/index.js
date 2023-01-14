import { createRouter, createWebHistory } from "vue-router";
import MainPage from '../pages/MainPage.vue'
import AuthPage from '../pages/AuthPage.vue'

const routes = [
  { path: "/", component: MainPage },
  { path: "/auth", component: AuthPage }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_ENV),
  routes,
});

export default router;
