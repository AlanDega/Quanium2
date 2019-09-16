import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'

Vue.config.productionTip = false


const firebaseConfig = {
  apiKey: "AIzaSyC0szEc8XkhVNecLMdLNUGvMpInC66rWXw",
    authDomain: "quanium-deploy.firebaseapp.com",
    databaseURL: "https://quanium-deploy.firebaseio.com",
    projectId: "quanium-deploy",
    storageBucket: "quanium-deploy.appspot.com",
    messagingSenderId: "510479508996",
    appId: "1:510479508996:web:83cbd13c06a32965"

};
firebase.initializeApp(firebaseConfig);




new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
