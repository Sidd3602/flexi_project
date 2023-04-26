import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCmbopt32VUHkc6WAYdLzglOuM0DzgLzb8",
  authDomain: "flexiproject-1.firebaseapp.com",
  projectId: "flexiproject-1",
  storageBucket: "flexiproject-1.appspot.com",
  messagingSenderId: "717554077532",
  appId: "1:717554077532:web:1d32caba1f789c2dfabb99",
  measurementId: "G-FK5MSDMSLL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
