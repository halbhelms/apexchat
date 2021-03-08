import { createApp } from "vue";
import App from "./App.vue";
import "./styles.css";
import router from "./router";
import store from "./store";
import SectionHeader from './components/UI/SectionHeader.vue'
import Toast from 'vue-toastification'
import "vue-toastification/dist/index.css"

import BaseButton from './components/UI/BaseButton.vue'
import BaseInput from './components/UI/BaseInput.vue'

const app = createApp(App)
  .use(store)
  .use(router)
  .use(Toast)


app.component('base-button', BaseButton)
app.component('base-input', BaseInput)
app.component('section-header', SectionHeader)

app.config.globalProperties.inDev = false
app.config.globalProperties.apiUrl = "https://codelifepro.herokuapp.com"


app.mount("#app");