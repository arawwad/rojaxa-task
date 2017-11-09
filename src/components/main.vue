<template>
    <main>
      <v-content>
        <v-container fluid class="text-center">
          <v-layout>
            <v-btn round color="primary" dark>Rounded Button</v-btn>
            <v-btn round color="primary" dark>Rounded Button</v-btn>
            <v-spacer></v-spacer>
            <input type="text"/>
          </v-layout>
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
    created() {
      if (this.user === null || this.user === undefined) {
        this.$router.push('/signin');
      }
    },
  };

</script>

<style>

</style>
