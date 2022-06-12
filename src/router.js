import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Goarbit from "./views/Goarbit.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import Perfil from "./views/Perfil.vue";
import Course from "./views/CourseDetail.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/goarbit", component: Goarbit },
  { path: "/curso", component: Course },
  { path: "/register", component: Register },
  { path: "/login", component: Login },
  { path: "/perfil", component: Perfil },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
