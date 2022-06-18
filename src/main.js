import { createApp } from "vue";
import router from "./router";
import { plugin, defaultConfig } from "@formkit/vue";
import "@formkit/themes/genesis";

import App from "./App.vue";
import "./index.css";

// TODO: Add base url config (axios)

const app = createApp(App);
app.use(router);
app.use(plugin, defaultConfig);
app.mount("#app");
