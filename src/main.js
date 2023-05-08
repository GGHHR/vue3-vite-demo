import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from './assets/router/index.js'

import { createPinia } from 'pinia'



const pinia = createPinia()

let app = createApp(App);

    app.use(router)
        .use(pinia)
        .mount('#app')
