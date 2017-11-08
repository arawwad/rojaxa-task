<template>
  <v-flex xs8 md4>
    <v-card class="mx-3 mt-3 column">
      <div class="column-header">
        <span class="badge">123</span>
        <h5 class="column-title">Daily Tasks</h5>
        <v-icon class="column-icon">bug_report</v-icon>
      </div>
      <div class="column-divider"></div>
      <draggable v-model="myArray" class="drag-wrapper" :options="{group:'tasks'}">
        <task v-for="element in myArray" :key="element.id" class="item"></task>
      </draggable>
    </v-card>
  </v-flex>
</template>

<script>
  import Draggable from 'vuedraggable';
  import Task from './Task';

  export default {
    name: 'Column',
    components: {
      Task,
      Draggable,
    },
    data() {
      return {
        myArray: [
          { id: 12, name: 'abdo' },
          { id: 12, name: 'abdallah' },
        ],
      };
    },
  };
</script>

<style scoped>
  .column {
    width: 404.3px;
    height: 620px !important;
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.07);
    overflow: auto;
  }

  .column::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  .column::-webkit-scrollbar {
    width: 7px;
  }

  .column::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #ccc;
    height: 10px;
  }

  .column-header{
    margin:20px auto 5px auto;
    width: 368px;
  }
  .badge {
    width: 67px;
    height: 25px;
    border-radius: 32px;
    background-image: linear-gradient(to bottom, #00d6fd, #00acfa);
    font-family: Roboto;
    font-size: 15px;
    text-align: center;
    color: #ffffff;
  }

  .column-title {
    font-family: Roboto;
    font-size: 18px;
    font-weight: 500;
    color: #262941;
    margin-left:20px;
    margin-bottom: 0;
    display: inline-block;
  }

  .column-icon {
    float: right;
    line-height: 32px;

  }
  .column-divider {
    width: 368px;
    height: 5px;
    opacity: 0.14;
    border-radius: 26px;
    background-color: #002d5e;
    margin: 0 auto;
  }

  .drag-wrapper {
    height: 80%;
  }
</style>
