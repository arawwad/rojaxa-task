import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from 'firebase';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    DailyTasks: [],
    onProgressTasks: [],
    DoneTasks: []
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    DailyTasks
  },
});
