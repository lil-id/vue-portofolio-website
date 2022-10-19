import { createApp } from "vue";
import { createPinia } from "pinia";
import axios from "axios";
import VueAxios from "vue-axios";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router, axios, VueAxios);

app.mount("#app");

import "bootstrap/dist/js/bootstrap.js";
