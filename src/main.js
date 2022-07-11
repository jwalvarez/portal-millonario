import axios from "axios";
import router from "./router";
import { createApp } from "vue";
import { createPinia } from 'pinia'
import { plugin, defaultConfig } from "@formkit/vue";
import "@formkit/themes/genesis";

import App from "./App.vue";
import "./index.css";
import {useAuthStore} from "./stores/auth";
import { useUserStore } from "./stores/user";

const pinia = createPinia()
const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(plugin, defaultConfig);
app.mount("#app");

const userStore = useUserStore();
// axios.defaults.baseURL = "http://localhost:3002/";
axios.defaults.baseURL = "https://cb36-186-82-87-25.ngrok.io/";

// TODO Try to implement the code below
// axios.defaults.headers = {
//     Authorization: "Token " + userStore.user.token,
//     "Content-Type": "application/json",
// };

// Vue.config.productionTip = false;
// Vue.prototype.$axios = axios;

const authStore = useAuthStore();