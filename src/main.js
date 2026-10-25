import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { applyLocale, detectLocale } from './i18n'
import './style.css'

applyLocale(detectLocale())

createApp(App).use(router).mount('#app')
