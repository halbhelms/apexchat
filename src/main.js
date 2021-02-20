import { createApp } from "vue";
import App from "./App.vue";
import "./styles.css";
import router from "./router";
import store from "./store";
import Toast from 'vue-toastification'
import "vue-toastification/dist/index.css"

const app = createApp(App)
  .use(store)
  .use(router)
  .use(Toast)
  .mount("#app");

app.config.globalProperties.inDev = false
app.config.globalProperties.apiUrl = "https://codelifepro.herokuapp.com/"