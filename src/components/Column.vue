<template>
  <v-flex xs8 md4>
    <v-card class="mx-3 mt-3 column">
      <div class="column-header">
        <span class="badge">{{ columnDetails.numberOfTasks }}</span>
        <h5 class="column-title">{{ columnDetails.name }}</h5>
        <v-icon class="column-icon">{{ columnDetails.icon }}</v-icon>
      </div>
      <div class="column-divider"></div>
        <draggable  class="drag-wrapper" :options="{group:'tasks'}" @add="onAdd" @remove="onRemove">
        <transition-group name="list" tag="div" class="drag-wrapper" :data-state="columnDetails.state">
        <task v-for="(task,i) in tasks" :task="task" :data-index="task.index" :key="i" class="item" ></task>
        </transition-group>
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
          { order: 0, name: 'abdo' },
        ],
      };
    },
    props: ['columnDetails', 'tasks'],
    methods: {
      onAdd(event) {
        console.log(event.item.dataset.index);
        this.$store.commit('changeTaskState', { index: event.item.dataset.index, state: event.target.dataset.state });
      },
      onRemove(event) {
        event.preventDefault();
        console.log(event);
      },
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

  .list-move {
    transition: transform 1s;
  }
</style>
