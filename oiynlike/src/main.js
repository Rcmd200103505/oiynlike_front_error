import Vue from 'vue'
import App from './App.vue'
import router from './router' // Импортируем маршруты из файла router/index.js

Vue.config.productionTip = false

const app = Vue.createApp({
    router,
    render: h => h(App)
})

app.mount('#app')