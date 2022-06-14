import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { Vue3Mq } from "vue3-mq";



const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(Vue3Mq);


console.log(import.meta.env.BASE_URL)
console.log("test")
app.mount('#app')
