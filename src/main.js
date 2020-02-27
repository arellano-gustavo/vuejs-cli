import Vue from 'vue'
import { BootstrapVue,  IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// ******************************
// Bootstrap info from official site at:
// https://bootstrap-vue.js.org/docs/
// ******************************
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(router)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
