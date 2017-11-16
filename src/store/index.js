import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from 'firebase';
import moment from 'moment';

Vue.use(Vuex);

export default {
  store: new Vuex.Store({
    state: {
      tasks: {},
      onProgressTasks: [],
      doneTasks: [],
      user: null,
      signError: null,
      date: moment().format('YYYY-MM-DD'),
      typeOfTasks: 'DispalyAllTasks',
      queryText: '',
      loading: false,
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
      setLoading(state, payload) {
        state.loading = payload; // eslint-disable-line no-param-reassign
      },
      createTask(state, payload) {
        if (!state.tasks[payload.date]) {
          state.tasks[payload.date] = []; // eslint-disable-line no-param-reassign
        }
        state.tasks[payload.date].push(payload);
      },
      changeTypeOfTask(state, payload) {
        state.typeOfTasks = payload;  // eslint-disable-line no-param-reassign
      },
      query(state, payload) {
        state.queryText = payload; // eslint-disable-line no-param-reassign
      },
      changeTaskState(state, payload) {
        state.tasks[state.date][payload.index].state // eslint-disable-line no-param-reassign
          = payload.state;
      },
      setDate(state, payload) {
        state.date = payload; // eslint-disable-line no-param-reassign
      },
    },
    actions: {
      signup({ commit }, payload) {
        commit('setLoading', true);
        firebase
          .auth()
          .createUserWithEmailAndPassword(payload.email, payload.password)
          .then(
            (user) => {
              commit('setLoading', false);
              const newUser = {
                id: user.uid,
                registeredMeetups: [],
              };
              commit('setUser', newUser);
            },
          )
          .catch(
            (error) => {
              commit('setLoading', false);
              commit('setError', error);
            },
          );
      },
      signin({ commit }, payload) {
        commit('setLoading', true);
        firebase
          .auth()
          .signInWithEmailAndPassword(payload.email, payload.password)
          .then((user) => {
            const newUser = {
              id: user.uid,
              email: user.email,
            };
            commit('setUser', newUser);
            commit('setLoading', true);
          }).catch((error) => {
            commit('setError', error.message);
          });
      },
      signOut({ commit }) {
        firebase.auth().signOut();
        commit('setUser', null);
      },
      loadTasks({ state, commit }) {
        try {
          commit('setLoading', true);
          firebase.database().ref('tasks').child(state.user.id).on('value', (data) => {
            const tasks = {};
            const obj = data.val();
            if (!obj) {
              commit('setLoading', false);
              return;
            }
            Object.keys(obj).forEach((date) => {
              tasks[date] = [];
              Object.keys(obj[date]).forEach(key => tasks[date].push(obj[date][key]));
              let i = 0;
              tasks[date].forEach((task) => {
                task.index = i;  // eslint-disable-line no-param-reassign
                i += 1;
              });
            });
            commit('setTasks', tasks);
            commit('setLoading', false);
          });
        } catch (error) {
          void (0); // eslint-disable-line no-void
        }
      },
      createTask({ commit, getters }, payload) {
        const task = {
          taskName: payload.taskName,
          locationFrom: payload.locationFrom,
          locationTo: payload.locationTo,
          infoDisplaying: payload.infoDisplaying,
          additionalDetails: payload.additionalDetails,
          date: payload.date,
          time: payload.time,
          creatorId: getters.user.id,
          state: 'undone',
        };
        let imageUrl;
        let key;
        firebase.database().ref('tasks').child(getters.user.id).child(payload.date)
          .push(task)
          .then((data) => {
            key = data.key;
            firebase.database().ref('tasks').child(getters.user.id).child(payload.date)
              .child(key)
              .update({ key });
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
          .catch(() => {});
      },
      autoSignIn({ commit }, payload) {
        commit('setUser', { id: payload.uid, email: payload.email });
      },
      changeTaskState({ state, getters }, payload) {
        const key = state.tasks[state.date][payload.index].key;
        firebase.database().ref('tasks').child(getters.user.id).child(state.date)
          .child(key)
          .update({ state: payload.state });
      },
    },
    getters: {
      user(state) {
        return state.user;
      },
      signError(state) {
        return state.signError;
      },
      loading(state) {
        return state.loading;
      },
      currentDayTasks(state) {
        return state.tasks[state.date];
      },
      currentDayTasksQueried(state, getters) {
        try {
          return getters.currentDayTasks.filter(task =>
            task.additionalDetails.includes(state.queryText)
            || task.infoDisplaying.includes(state.queryText)
            || task.locationFrom.includes(state.queryText)
            || task.locationTo.includes(state.queryText)
            || task.taskName.includes(state.queryText));
        } catch (e) {
          return [];
        }
      },
      taskByState:
        (state, getters) => taskState => getters.currentDayTasksQueried
          .filter(task => task.state === taskState),
      columnDetails(_, getters) {
        return {
          undone: { name: 'Daily Tasks', type: 'Tasks To Be Done', numberOfTasks: getters.taskByState('undone').length, icon: 'bug_report', state: 'undone' },
          onprogress: { name: 'On Progress', type: 'Tasks On Progess', numberOfTasks: getters.taskByState('onprogress').length, icon: 'alarm', state: 'onprogress' },
          done: { name: 'Done', type: 'Done Tasks', numberOfTasks: getters.taskByState('done').length, icon: 'lightbulb_outline', state: 'done' },
        };
      },
      dates(state) {
        let existingDates = Object.keys(state.tasks);
        if (!existingDates.length) {
          existingDates = [moment().format('YYYY-MM-DD')];
        }
        return existingDates;
      },
    },
  }),
};
