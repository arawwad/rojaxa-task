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
                <v-list-tile v-for="(type, i) in typesOfTasks" v-if="type !== typeOfTasks" :key="i" @click="changeTypeOfTask(type)">
                  <v-list-tile-title v-text="type"></v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>

            <v-btn round class="btn" dark><v-icon class="mr-3">date_range</v-icon>Today's Tasks <v-icon class="ml-3">keyboard_arrow_down</v-icon></v-btn>
            <v-spacer></v-spacer>
            <v-text-field
              single-line
              class="input"
              v-model="queryText"
              @keydown="queryTasks"
              prepend-icon="search"
              placeholder="Search For Tasks"
            ></v-text-field>          </v-layout>
          <v-layout row wrap justify-center>
            <column v-for="(column,i) in columnDetails" :tasks="taskByState(column.state)" :columnDetails="column">
            </column>
          </v-layout>
        </v-container>
      </v-content>
    </main>
</template>

<script>
  import Column from './Column';

  export default {
    data() {
      return {
        displayedColumns: [{},
          {},
          {}],
        typesOfTasks: ['Display All Tasks', ' Tasks To Be Done', ' Tasks On Progess', ' Done Tasks'],
        typeOfTasks: 'Display All Tasks',
        queryText: '',
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
      currentDayTasks: {
        get() {
          return this.$store.getters.currentDayTasks;
        },
        set() {

        },
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
