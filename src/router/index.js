import Vue from 'vue'
import VueRouter from 'vue-router'
import FirstPage from '@/components/FirstPage'
import SecondPage from '@/components/SecondPage'
import TerceraPage from '@/components/TerceraPage'
import CuartaPage from '@/components/CuartaPage'
import QuintaPage from '@/components/QuintaPage'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: FirstPage
    },
    {
      path: '/segunda',
      name: 'segunda',
      component: SecondPage
    },
    {
      path: '/tercera',
      name: 'tercera',
      component: TerceraPage
    },
    {
      path: '/cuarta',
      name: 'cuarta',
      component: CuartaPage
    },
    {
      path: '/quinta',
      name: 'quinta',
      component: QuintaPage
    }
  ]
})

/** /
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (router.app.$keycloak.authenticated) {
      next()
    } else {
      const loginUrl = router.app.$keycloak.createLoginUrl()
      window.location.replace(loginUrl)
    }
  } else {
    next()
  }
})
/**/
