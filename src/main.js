import { createApp } from 'vue'
import App from './App.vue'

//IMPORTAMOS EL ARCHIVO DECLARADO EN ROUTER
import router from './router/router.js'


createApp(App).use(router).mount('#app')


