// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VeeValidate from 'vee-validate'
import VueMarkDown from 'vue-markdown'
import firebase from 'firebase'
//import {config} from './fireb_conf'
import config_data from './fireb_conf.json'


Vue.use(VeeValidate)
Vue.use(VueMarkDown)

Vue.config.productionTip = false



console.log("FIREB CONF", config_data)

firebase.initializeApp(config_data)



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App, VueMarkDown },
  template: '<App/>'
});
