import Vue from 'vue'
import { BootstrapVue,  IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Keycloak from 'keycloak-js'
// import VueKeycloakJs from '@dsb-norge/vue-keycloak-js'
// ******************************
// Bootstrap info from official site at:
// https://bootstrap-vue.js.org/docs/
// ******************************
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(router)
Vue.use(VueAxios, axios)
Vue.use(Keycloak)

Vue.config.productionTip = false


/** /
new Vue({
  render: h => h(App),
  router
}).$mount('#app')

/**/


/**/
let initOptions = {
  url: 'https://keycloak.ci.ultrasist.net/auth', 
  realm: 'SpringBootKeycloak', 
  clientId: 'login-app',
  credentials: {
      secret: 'xxxx'
  }
  //onLoad:'login-required'
}

let keycloak = Keycloak(initOptions);

keycloak.init({ 
    onLoad: 'login-required'
    //onLoad: 'check-sso' 
 }).success((auth) => {
 
    if(!auth) {
      window.location.reload();
    } else {
      console.log("Authenticated");
    }
 
    new Vue({
      render: h => h(App),
      router
    }).$mount('#app')
  

    localStorage.setItem("vue-token", keycloak.token);
    localStorage.setItem("vue-refresh-token", keycloak.refreshToken);

    setTimeout(() => {
      keycloak.updateToken(70).success((refreshed)=>{
        if (refreshed) {
          console.log('Token refreshed'+ refreshed);
        } else {
          console.log('Token not refreshed, valid for '
          + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
        }
      }).error(()=>{
          console.log('Failed to refresh token');
      });
    }, 60000)

}).error(() =>{
  console.log("Authenticated Failed");
});


/**/


/** /
Vue.use(Keycloak, {
  init: {
    // Use 'login-required' to always require authentication
    // If using 'login-required', there is no need for the router guards in router.js
    onLoad: 'check-sso'
  },
  config: {
    url: 'https://keycloak.ci.ultrasist.net/auth',
    clientId: 'login-app',
    realm: 'SpringBootKeycloak'
  },
  onReady: (Keycloak) => {
    new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
});

/**/





/** /
Vue.use(VueKeycloakJs, {
  init: {
    // Use 'login-required' to always require authentication
    // If using 'login-required', there is no need for the router guards in router.js
    onLoad: 'check-sso'
  },
  config: {
    url: 'https://keycloak.ci.ultrasist.net/auth',
    clientId: 'login-app',
    realm: 'SpringBootKeycloak'
  },
  onReady: (keycloak) => {
    new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})
/**/

