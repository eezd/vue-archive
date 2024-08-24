import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router'
import vuex from './store'

import 'element-plus/theme-chalk/src/message-box.scss'
import 'element-plus/theme-chalk/src/message.scss'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(vuex)

app.mount('#app')
