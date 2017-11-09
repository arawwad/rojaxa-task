import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from 'firebase';

Vue.use(Vuex);

export default {
  store: new Vuex.Store({
    state: {
      dailyTasks: [],
      onProgressTasks: [],
      doneTasks: [],
      user: null,
    },
    mutations: {
      setUser(state, payload) {
        state.user = payload; // eslint-disable-line no-param-reassign
        console.log(state.user); // eslint-disable-line no-console
      },
    },
    actions: {
      signup({ commit }, payload) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(payload.email, payload.password)
          .then((user) => {
            const newUser = {
              id: user.uid,
            };
            commit('setUser', newUser);
          }).catch(error => console.log(error));
      },
      signin({ commit }, payload) {
        firebase
          .auth()
          .signInWithEmailAndPassword(payload.email, payload.password)
          .then((user) => {
            const newUser = {
              id: user.uid,
            };
            commit('setUser', newUser);
          });
      },
    },
    getters: {
      user(state) {
        return state.user;
      },
    },
  }),
};
