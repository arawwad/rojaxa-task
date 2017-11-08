import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from 'firebase';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    dailyTasks: [],
    onProgressTasks: [],
    doneTasks: []
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    DailyTasks
  },
});
