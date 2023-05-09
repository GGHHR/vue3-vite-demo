import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from './assets/router/index.js'
import axios_config from "@/assets/axios/axios_config";

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// import "@/assets/css/initcss.scss"



import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


const pinia = createPinia()
pinia.use(piniaPluginPersistedstate);

let app = createApp(App);
    app.config.globalProperties.$axios=axios_config

    app.use(router)
        .use(pinia)
        .use(ElementPlus)
        .mount('#app')
