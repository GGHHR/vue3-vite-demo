import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './assets/router/index.js'


let app = createApp(App);

    app.provide('message', 'hello')

    app.use(router)
       .mount('#app')
