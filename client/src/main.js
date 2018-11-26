import Vue from 'vue'
import './components'
import './plugins'
import { sync } from 'vuex-router-sync'

import App from './App.vue'
import router from '@/router'
import store from '@/store'
// Sync store with router
sync(store, router)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
