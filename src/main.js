import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from './assets/router/index.js'
import axios_config from "@/assets/axios/axios_config";



import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


const pinia = createPinia()
pinia.use(piniaPluginPersistedstate);

let app = createApp(App);
    app.config.globalProperties.$axios=axios_config
app.config.globalProperties.nihao = function () {
        alert(1)
};
    app.use(router)
        .use(pinia)
        .mount('#app')
