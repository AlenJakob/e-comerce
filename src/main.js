import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueAgile from 'vue-agile'

const myApp  = createApp(App)
import "../src/assets/scss/variables.scss";

myApp.use(router)
myApp.use(VueAgile)
myApp.mount("#app");
