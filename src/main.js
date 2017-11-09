// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';

import * as firebase from 'firebase';

import Vuetify from 'vuetify';
import './stylus/main.styl';

import App from './App';
import router from './router';
import store from './store';


Vue.use(Vuetify);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store.store,
  template: '<App/>',
  components: { App },
  created() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA2sq3ry3qb5TpJvsY9HKbrlIcNY21oKP4',
      authDomain: 'experiment-514e7.firebaseapp.com',
      databaseURL: 'https://experiment-514e7.firebaseio.com',
      projectId: 'experiment-514e7',
      storageBucket: 'experiment-514e7.appspot.com',
      messagingSenderId: '980710858649',
    });
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
  },
});
