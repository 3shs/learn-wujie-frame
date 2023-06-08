import { createApp } from 'vue'
import './assets/style/index.scss'
import App from './App.vue'
import router from './router/index'

import WujieVue from 'wujie-vue3'
createApp(App)
  .use(router)
  .use(WujieVue)
  .mount('#app')
