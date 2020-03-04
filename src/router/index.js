import Vue from 'vue'
import VueRouter from 'vue-router'
import FirstPage from '@/components/FirstPage'
import SecondPage from '@/components/SecondPage'
import TerceraPage from '@/components/TerceraPage'
import CuartaPage from '@/components/CuartaPage'
import QuintaPage from '@/components/QuintaPage'

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
      component: CuartaPage,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/quinta',
      name: 'quinta',
      component: QuintaPage
    }
  ]
})

/**/
router.beforeEach((to, from, next) => {
  if(to=='abc') {  // LINEA DUMMY 1
  //if (to.matched.some(record => record.meta.requiresAuth)) { // LINEA REAL 2
    console.log("Se ha llegado a una pagina que contiene el meta de RequiresAuth: true !!!!!!");
  } else {
    console.log(from);
    console.log(to);
  }
  next()
})
/**/

export default router
