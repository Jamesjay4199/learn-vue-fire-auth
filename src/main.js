import Vue from 'vue'
// import vueRouter
import VueRouter from 'vue-router'
// import our routes
import router from './routes'
// import vuex store
import { store } from './store'
import App from './App.vue'

import { init } from './services/firebaseService'

init();
Vue.config.productionTip = false

// Setup Vue Router
Vue.use(VueRouter)

new Vue({
  router,
  // inject store to all child components
  store,
  render: h => h(App),
}).$mount('#app')
