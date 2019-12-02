import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';
import TmdbConfig from './plugins/tmdb'
import tmdb from './plugins/tmdb'

Vue.config.productionTip = false;

let app = '';
// Initialize tmdb api
tmdb.init();
// Initialize firebase
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
