<template>
  <v-flex xs8 md4>
    <v-card class="mx-3 my-3 column">
      <v-layout row >
        <span class="badge">number</span>
        <span class="title">title</span>
        <v-icon>bug_report</v-icon>
      </v-layout>
      <div class="column-divider"></div>
      <draggable v-model="myArray" class="drag-wrapper"  :options="{group:'tasks'}" >
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
  .column{
    width: 404.3px;
    height: 620px !important;
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.07);
    overflow: auto;
  }

  .column::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
  }

  .column::-webkit-scrollbar
  {
    width: 7px;
    height: 113px;
    opacity: 0.14;
    border-radius: 48px;
    background-color: #002d5e;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  }

  .column::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #555;
  }
  .badge{
    width: 67px;
    height: 25px;
    border-radius: 32px;
    background-image: linear-gradient(to bottom, #00d6fd, #00acfa);
    font-family: Roboto;
    font-size: 15px;
    text-align: center;
    color: #ffffff;
  }
  .title{
    width: 94px;
    height: 21px;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    color: #262941;
  }
.column-divider{
  width: 368px;
  height: 5px;
  opacity: 0.14;
  border-radius: 26px;
  background-color: #002d5e;
  margin:12px auto;
}
  .drag-wrapper{
    height: 100%;
  }
</style>
