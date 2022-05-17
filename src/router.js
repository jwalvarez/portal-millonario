import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import Goarbit from "./components/Goarbit.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/goarbit", component: Goarbit },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
