import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { getWord } from './api/getWord'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')


console.log( await getWord() )
