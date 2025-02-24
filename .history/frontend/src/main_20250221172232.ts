import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { useRealWordStore } from './stores/realWord'


const app = createApp(App)

useRealWordStore().fetchWord()

app.use(createPinia())

app.mount('#app')
