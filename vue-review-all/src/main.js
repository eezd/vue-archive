import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import vuex from './vuex/store'

createApp(App).use(router).use(vuex).mount('#app')
