import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/index.js'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
