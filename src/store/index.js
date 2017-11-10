import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from 'firebase';

Vue.use(Vuex);

export default {
  store: new Vuex.Store({
    state: {
      Tasks: {},
      onProgressTasks: [],
      doneTasks: [],
      user: null,
      signError: null,
      date: '2017-11-20',
    },
    mutations: {
      setUser(state, payload) {
        state.user = payload; // eslint-disable-line no-param-reassign
      },
      setTasks(state, payload) {
        state.tasks = payload; // eslint-disable-line no-param-reassign
      },
      setError(state, payload) {
        state.signError = payload; // eslint-disable-line no-param-reassign
      },
      createTask(state, payload) {
        if (!state.tasks[payload.date]) {
          state.tasks[payload.date] = []; // eslint-disable-line no-param-reassign
        }
        state.tasks[payload.date].push(payload);
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
      signin({ state, commit }, payload) {
        firebase
          .auth()
          .signInWithEmailAndPassword(payload.email, payload.password)
          .then((user) => {
            const newUser = {
              id: user.uid,
              email: user.email,
            };
            commit('setUser', newUser);
            firebase.database().ref('tasks').child(state.user.id).once('value')
              .then((data) => {
                const tasks = {};
                const obj = data.val();
                Object.keys(obj).forEach((date) => {
                  tasks[date] = [];
                  Object.keys(obj[date]).forEach(key => tasks[date].push(obj[date][key]));
                });
                commit('setTasks', tasks);
              });
          }).catch((error) => {
            commit('setError', error.message);
          });
      },
      signOut({ commit }) {
        firebase.auth().signOut();
        commit('setUser', null);
      },
      async createTask({ commit, getters }, payload) {
        const task = {
          taskName: payload.taskName,
          locationFrom: payload.locationFrom,
          locationTo: payload.locationTo,
          infoDisplaying: payload.infoDisplaying,
          additionalDetails: payload.additionalDetails,
          date: payload.date,
          time: payload.time,
          creatorId: getters.user.id,
        };
        let imageUrl;
        let key;
        await firebase.database().ref('tasks').child(getters.user.id);
        firebase.database().ref('tasks').child(getters.user.id).child(payload.date)
          .push(task)
          .then((data) => {
            key = data.key;
            return key;
          })
          .then(() => {
            const filename = payload.image.name;
            const ext = filename.slice(filename.lastIndexOf('.'));
            return firebase.storage().ref(`tasks/${key}.${ext}`).put(payload.image);
          })
          .then((fileData) => {
            imageUrl = fileData.metadata.downloadURLs[0];
            return firebase.database().ref('tasks').child(getters.user.id).child(payload.date)
              .child(key)
              .update({ imageUrl });
          })
          .then(() => {
            commit('createTask', {
              ...task,
              imageUrl,
              id: key,
            });
          });
        firebase.database().ref('dates').child(getters.user.id)
          .push(payload.date);
      },
    },
    getters: {
      user(state) {
        return state.user;
      },
      signError(state) {
        return state.signError;
      },
      currentDayTasks(state) {
        return state.tasks[state.date];
      },
    },
  }),
};
