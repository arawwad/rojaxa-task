<template>
  <v-layout>
    <v-flex xs12>
      <v-card class="task">
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">task title</h3>
            <div class="details" >id/data/time</div>
            <div class="card-divider" style="background-color: #f7115e;"></div>
            <div class="location">
              <div class="location-helper">
                <div class="helper-start"></div>
                <div class="helper-line"></div>
                <div class="helper-end"></div>
              </div>
              <div class="location-text">
                <p class="location-title">location</p>
                <p class="location-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, odio?</p>
                <p class="location-title mt-4">To</p>
                <p class="location-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, suscipit.</p>
              </div>
            </div>
            <div class="info-displaying">
              <p class="info-displaying-title">Info Displaying</p>
              <p class="info-displaying-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, porro!</p>
            </div>
            <div class="info-displaying">
              <p class="info-displaying-title">Additional Details</p>
              <p class="info-displaying-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, porro!</p>
            </div>
            <div class="attached-image">
              <p><v-icon>attachment</v-icon> Attchment Screen</p>
            </div>
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
  .card__title {
    padding: 18px 16px
  }
  .headline {
    height: 36px;
    font-family: Roboto;
    font-size: 15px;
    font-weight: bold;
    text-align: left;
    color: #002d5e;
  }
  .details {
    height: 11px;
    opacity: 0.6;
    font-family: Roboto;
    font-size: 10px;
    text-align: left;
    color: #002d5e;
  }
  .card-divider {
    width: 65px;
    height: 5px;
    opacity: 0.4;
    border-radius: 41px;
    margin-top: 9px;
    margin-bottom: 24px;
  }
  .location-helper {
    width:13px;
    margin-right: 16px;
    display: inline-block;
    position: relative;
    top:-30px;
  }
  .helper-start{
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background-color: #ffffff;
    border: solid 1px #f7115e;
  }
  .helper-line{
    width: 0px;
    height: 66px;
    border: solid 1px #002d5e;
    margin-left: 5.5px;
  }
  .helper-end{
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background-color: #ffffff;
    border: solid 1px #00acfa;
  }
  .location-text{
    width:290px;
    display: inline-block;
  }
  .location-title{
    width: 57px;
    height: 16px;
    margin-bottom:5px;
    font-family: Roboto;
    font-weight:bold;
    font-size: 14px;
    text-align: left;
    color: #002d5e;
  }
  .location-body{
    width: 300px;
    height: 30px;
    font-family: HelveticaNeue;
    font-size: 12px;
    font-weight: 300;
    text-align: left;
    color: #6c6c6c;
  }
  .info-displaying-title{
    width: 200px;
    height: 16px;
    margin-bottom:16px;
    font-family: Roboto;
    font-size: 14px;
    text-align: left;
    color: #002d5e;
  }
  .info-displaying-text{
    width: 321.5px;
    height: 60px;
    font-family: HelveticaNeue;
    font-size: 12px;
    font-weight: 300;
    text-align: left;
    color: #6c6c6c;
  }
  .attached-image .icon{
    line-height: 1.2em;
  }
</style>

