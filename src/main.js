import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Default from "@/layouts/default.vue";
const app = createApp(App);
import store from "./store/";

// eslint-disable-next-line vue/multi-word-component-names
app.component("default", Default);

app.use(router);
app.use(store);
app.mount("#app");
