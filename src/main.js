import {createApp} from 'vue'
import App from './App.vue'
import router from './assets/router/index.js'
import axios_config from "@/assets/axios/axios_config";
import ElementPlus from 'element-plus'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


const pinia = createPinia()
/*pinia持久化*/
pinia.use(piniaPluginPersistedstate);

let app = createApp(App);
    app.config.globalProperties.$axios=axios_config

    app.use(router)
        .use(pinia)
        .use(ElementPlus)
        .mount('#app')
