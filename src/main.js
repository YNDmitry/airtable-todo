import { createApp } from 'vue'
import App from './App.vue'
import router from './routers/index.js'
import './assets/css/index.css'
import './assets/css/transition.css'

createApp(App).use(router).mount('#app')
