// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VeeValidate from 'vee-validate'
import VueMarkDown from 'vue-markdown'
import firebase from 'firebase'
import VueFire from 'vuefire'

import {firebaseApp} from './db'

Vue.use(VeeValidate)
Vue.use(VueMarkDown)
Vue.use(VueFire)

Vue.config.productionTip = false

let app;
//var firebaseApp = firebase.initializeApp(config_data)

//let db = firebaseApp.database()
//let storiesRef = db.ref('stories')


firebaseApp.auth().onAuthStateChanged(function(user){
  if(!app){
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      router,
      components: { App, VueMarkDown },
      template: '<App/>'
    });
  }
});

/*
new Vue({
  el: '#app',
  router,
  components: { App, VueMarkDown },
  template: '<App/>'
});
*/