import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from './assets/router/index.js'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


const pinia = createPinia()
pinia.use(piniaPluginPersistedstate);
let app = createApp(App);

    app.use(router)
        .use(pinia)
        .mount('#app')
