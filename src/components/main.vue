<template>
    <main>
      <v-content>
        <v-container v-if="loading">
          <v-layout>
            <v-flex xs12 class="text-xs-center mt-5">
              <v-progress-circular
                indeterminate
                class="primary--text"
                :width="7"
                :size="70"
                v-if="loading"></v-progress-circular>
            </v-flex>
          </v-layout>
        </v-container>
        <v-container v-else fluid class="text-center">
          <v-layout>
            <v-menu transition="slide-y-reverse-transition">
              <v-btn round class="btn" dark slot="activator"><v-icon class="mr-2">list</v-icon>{{ typeOfTasks }}<v-icon class="ml-2">keyboard_arrow_down</v-icon> </v-btn>
              <v-list>
                <v-list-tile v-for="(type, i) in typesOfTasks" v-if="type !== typeOfTasks"  :key="i" @click="changeTypeOfTask(type)">
                  <v-list-tile-title v-text="type"></v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>

            <v-menu transition="slide-y-reverse-transition">
              <v-btn round class="btn" dark slot="activator"><v-icon class="mr-3">date_range</v-icon>{{ currentDay }}<v-icon class="ml-3">keyboard_arrow_down</v-icon></v-btn>
              <v-list>
                <v-list-tile v-for="(date, i) in dates" :key="i" @click="changeDate(date)">
                  <v-list-tile-title v-text="date"></v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
            <v-spacer></v-spacer>
            <v-text-field
              single-line
              class="input"
              v-model="queryText"
              @keydown="queryTasks"
              prepend-icon="search"
              placeholder="Search For Tasks"
            ></v-text-field>
          </v-layout>
          <v-layout row wrap justify-center>
            <column v-for="(column,i) in columnDetails" :tasks="taskByState(column.state)" :columnDetails="column" v-if="displayTypeOfTasks(column.type)">
            </column>
          </v-layout>
        </v-container>
      </v-content>
    </main>
</template>

<script>
  import moment from 'moment';
  import Column from './Column';

  export default {
    data() {
      return {
        typesOfTasks: ['Display All Tasks', 'Tasks To Be Done', 'Tasks On Progess', 'Done Tasks'],
        typeOfTasks: 'Display All Tasks',
        queryText: '',
        currentDay: moment().format('YYYY-MM-DD'),
      };
    },
    components: {
      Column,
    },
    methods: {
      changeTypeOfTask(typeOfTasks) {
        this.typeOfTasks = typeOfTasks;
        this.$store.commit('changeTypeOfTask', typeOfTasks);
      },
      queryTasks() {
        this.$store.commit('query', this.queryText);
      },
      taskByState(taskState) {
        return this.$store.getters.taskByState(taskState);
      },
      changeDate(date) {
        this.$store.commit('setDate', date);
      },
      displayTypeOfTasks(type) {
        if (this.typeOfTasks === 'Display All Tasks') {
          return true;
        } else if (this.typeOfTasks === type) {
          return true;
        }
        return false;
      },
    },
    computed: {
      user() {
        return this.$store.getters.user;
      },
      loading() {
        return this.$store.getters.loading;
      },
      columnDetails() {
        return this.$store.getters.columnDetails;
      },
      dates() {
        return this.$store.getters.dates;
      },
    },
  };

</script>

<style scoped>
.btn{
  width: 200px;
  height: 35px;
  border-radius: 14px;
  background-color: #ffffff !important;
  color: #000 !important;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.07);
}
  .btn .icon{
    font-size: 14px;
  }

  .input{
    width: 250px;
    height: 41px;
    margin-right: 50px;
  }
</style>
