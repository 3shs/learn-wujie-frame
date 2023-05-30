import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router/index'

import WujieVue from 'wujie-vue3'

createApp(App).use(router).use(WujieVue).mount('#app')
