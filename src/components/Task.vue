<template>
  <v-layout>
    <v-flex xs12>
      <v-card class="task">
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">task title</h3>
            <div class="details">task details</div>
            <div class="card-divider"></div>
            <div class="location"></div>
            <div class="info-displaying"></div>
            <div class="additional-details"></div>
            <div class="attached-image"></div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: 'Task',
  };
</script>

<style scoped>
  .task {
    max-width: 369.6px;
    height: 247.3px;
    opacity: 0.77;
    border-radius: 5px;
    background-color: rgba(225, 234, 242, 0.49);
    box-shadow: 0 5px 4px 0 rgba(0, 0, 0, 0.03);
    border: dashed 1px #dedede;
    margin: 16px auto;
  }
</style>
