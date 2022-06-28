import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Goarbit from "./views/Goarbit.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import Perfil from "./views/Perfil.vue";
import Course from "./views/CourseDetail.vue";
import VerifyTransaction  from "./views/VerifyTransaction.vue";
import VideoPlayer from "./views/VideoPlayer.vue";
import PageNotFound from "./views/PageNotFound.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/goarbit", component: Goarbit },
  { path: "/curso/:id", component: Course },
  { path: "/register", component: Register },
  { path: "/login", component: Login },
  { path: "/perfil", component: Perfil },
  { path: "/verify-transaction/:id", component: VerifyTransaction },
  { path: "/view/:id", component: VideoPlayer },
  { path: '/:pathMatch(.*)*', component: PageNotFound },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
