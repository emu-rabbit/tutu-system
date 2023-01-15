import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import './router/hooks'

import 'vant/lib/index.css'
import 'nprogress/nprogress.css'

createApp(App).use(createPinia()).use(router).mount('#app')
