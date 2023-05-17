import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from "./router";
import ElementPlus from 'element-plus'
import "element-plus/dist/index.css";
import './common/font.css'
const app = createApp(App);
const pinia = createPinia();
app.use(router).use(pinia).use(ElementPlus).mount("#app");