import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import plugins from "./plugins";

const app = createApp(App);
app.use(plugins);
// app.use(router);
app.mount("#app");
