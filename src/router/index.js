import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HelloWorld'
/*
import CartPage from '@/pages/CartPage'
import ProductPage from '@/pages/ProductPage'
import GoosePage from '@/pages/GoosePage'
import AxPage from '@/pages/AxPage'
*/
import OtraPage from '@/components/OtraPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/otra',
      name: 'otra',
      component: OtraPage
    }

  ]
})
