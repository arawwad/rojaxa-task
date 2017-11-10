<template>
    <main>
      <v-content>
        <v-container fluid class="text-center">
          <v-layout>
            <v-btn round class="btn" dark><v-icon class="mr-2">list</v-icon>Display All Tasks <v-icon class="ml-2">keyboard_arrow_down</v-icon> </v-btn>
            <v-btn round class="btn" dark><v-icon class="mr-3">date_range</v-icon>Today's Tasks <v-icon class="ml-3">keyboard_arrow_down</v-icon></v-btn>
            <v-spacer></v-spacer>
            <v-text-field
              single-line
              class="input"
              prepend-icon="search"
              placeholder="Search For Tasks"
            ></v-text-field>          </v-layout>
          <v-layout row wrap justify-center>
            <column v-for="(column,i) in displayedColumns" :key="i">
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
      };
    },
    components: {
      Column,
    },
    computed: {
      user() {
        return this.$store.getters.user;
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
