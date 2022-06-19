import { createApp } from "vue";
import axios from "axios";
import { createPinia } from 'pinia'
import router from "./router";
import { plugin, defaultConfig } from "@formkit/vue";
import "@formkit/themes/genesis";

import App from "./App.vue";
import "./index.css";

// TODO: Add base url config (axios)
axios.defaults.baseURL = "http://localhost:3002/";
// axios.defaults.baseURL = "https://portal-millonario.free.beeceptor.com/";
// Vue.config.productionTip = false;
// Vue.prototype.$axios = axios;

const pinia = createPinia()
const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(plugin, defaultConfig);
app.mount("#app");
