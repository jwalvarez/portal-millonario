import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import Goarbit from "./components/Goarbit.vue";
import Login from "./components/Login.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/goarbit", component: Goarbit },
  { path: "/login", component: Login },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
