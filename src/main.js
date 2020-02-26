import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'

Vue.use(router)

// ******************************
// Bootstrap info from official site at:
// https://bootstrap-vue.js.org/docs/
// ******************************
import { BootstrapVue,  IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

sync(store, router)
Vue.config.productionTip = false

new Vue({
  render: h => h(App), router, store
}).$mount('#app')
