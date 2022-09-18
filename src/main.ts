import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { store, key } from './store'

// pass the injection key
createApp(App).use(store, key).mount('#app')
