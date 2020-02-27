import Vue from 'vue'
import VueRouter from 'vue-router'
import FirstPage from '@/components/FirstPage'
import SecondPage from '@/components/SecondPage'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: FirstPage
    },
    {
      path: '/otra',
      name: 'otra',
      component: SecondPage
    }
  ]
})
