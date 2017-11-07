<template>
  <v-flex xs12 md4>
    <span class="badge">number</span>
    <span class="title">title</span>
    <v-spacer></v-spacer>
    <v-icon>bug-report</v-icon>
    <div class="column-divider"></div>
    <draggable v-model="myArray" :options="{draggable:'.item'}">
      <task v-for="element in myArray" :key="element.id" class="item">
      </task>
    </draggable>
  </v-flex>
</template>

<script>
  import Task from 'Task.vue'
  export default {
    components: {
      Task
    }
  }
</script>

<style scoped>

</style>
