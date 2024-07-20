import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

import router from './router/index.js'
const app = createApp(App)

app.use(bootstrap)
app.use(router)

app.mount('#app')
