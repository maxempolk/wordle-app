import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { useRealWordStore } from './stores/realWord'

const app = createApp(App)

app.use(createPinia())

console.log( import.meta.env.VUE_APP_API_URL )
useRealWordStore().fetchWord()

app.mount('#app')
