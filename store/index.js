import Vuex from 'vuex'
import Vue from 'vue'
import otraPage from '../components/OtraPage.vue'
import HomePage from '../components/HelloWorld.vue'
// import products from './products'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    HomePage, otraPage
    // products
  }
})
