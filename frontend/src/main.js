import { createApp } from 'vue'
import App from './app.vue'
import './register-service-worker'
import router from './router'
import store from './store'
import 'normalize.css'

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
