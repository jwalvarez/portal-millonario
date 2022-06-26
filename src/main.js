import { createApp } from "vue";
import axios from "axios";
import { createPinia } from 'pinia'
import router from "./router";
import { plugin, defaultConfig } from "@formkit/vue";
import "@formkit/themes/genesis";

import App from "./App.vue";
import "./index.css";
import {useAuthStore} from "./stores/auth";

const pinia = createPinia()
const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(plugin, defaultConfig);
app.mount("#app");

// TODO: Add base url config (axios)
axios.defaults.baseURL = "http://localhost:3002/";
// axios.defaults.baseURL = "https://6fdc-186-82-85-217.ngrok.io/";
// Vue.config.productionTip = false;
// Vue.prototype.$axios = axios;

const authStore = useAuthStore();