import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import firebase from 'firebase';
import firebaseConfig from './firebase.config';

Vue.config.productionTip = false

let app = '';
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// intialize app only when firebase is intialized
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }
});
