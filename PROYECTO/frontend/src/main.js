import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '../src/assets/css/estilos.css'
import '../node_modules/bootstrap/css/bootstrap.css'
import '../node_modules/bootstrap/js/bootstrap.bundle'

createApp(App).use(router).mount('#app')
