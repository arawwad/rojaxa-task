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
      signError: null,
    },
    mutations: {
      setUser(state, payload) {
        state.user = payload; // eslint-disable-line no-param-reassign
      },
      setError(state, payload) {
        state.signError = payload; // eslint-disable-line no-param-reassign
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
          }).catch((error) => {
            commit('setError', error.message);
          });
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
          }).catch((error) => {
            commit('setError', error.message);
          });
      },
    },
    getters: {
      user(state) {
        return state.user;
      },
      signError(state) {
        return state.signError;
      },
    },
  }),
};
