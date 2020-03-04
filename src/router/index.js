import Vue from 'vue'
import VueRouter from 'vue-router'

import FirstPage from '@/components/FirstPage'
import SecondPage from '@/components/SecondPage'
import TerceraPage from '@/components/TerceraPage'
import CuartaPage from '@/components/CuartaPage'
import QuintaPage from '@/components/QuintaPage'

import "core-js/stable";
import "regenerator-runtime/runtime";

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: FirstPage
    },
    {
      path: '/segunda',
      name: 'segunda',
      component: SecondPage,
      meta: {
        requiresAuth: true
      }
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

router.beforeEach((to, from, next) => {
  const kc = router.app.$options.keycloak;
  console.log(kc);
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth) {
      //const auth = router.app.$keycloak.authenticated;
      if (kc.authenticated) {
        console.log("Se ha llegado a una pagina que contiene el meta de RequiresAuth, pero estoy autenticado !");
        next()
      } else {
        console.log("Se ha llegado a una pagina que contiene el meta de RequiresAuth, pero NO estoy autenticado :(");
        const loginUrl = kc.createLoginUrl()
        window.location.replace(loginUrl)
      }
  } else {
    console.log("Se ha llegado a una pagina que NO contiene el meta de RequiresAuth");
    next()
  }
})

export default router
