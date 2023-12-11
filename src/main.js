import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './style.css'

createApp(App).mount('#app').use(store)
