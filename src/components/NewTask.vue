<template>
  <v-container fluid>
    <v-layout justify-center>
      <v-flex xs8  mt-3>
        <h3>Create New Task</h3>
        <v-card>
          <v-layout justify-center>
            <v-flex xs10 my-3>
              <v-form v-model="valid" ref="form" lazy-validation>
                <v-text-field
                  label="Task Name"
                  v-model="taskName"
                  required
                ></v-text-field>
                <h5>Location</h5>
                <v-layout justify-space-around>
                  <v-flex xs5>
                    <v-text-field
                      label="From"
                      v-model="locationFrom"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs5><v-text-field
                    label="To"
                    v-model="locationTo"
                  ></v-text-field></v-flex>
                </v-layout>
                <h5>Date and Time</h5>
                <v-layout justify-space-around>
                  <v-flex xs5>
                    <v-dialog
                      persistent
                      v-model="modal"
                      lazy
                      full-width
                    >
                      <v-text-field
                        slot="activator"
                        label="Pick a date"
                        v-model="date"
                        prepend-icon="event"
                        readonly
                      ></v-text-field>
                      <v-date-picker  v-model="date" scrollable actions>
                        <template slot-scope="{ save, cancel }">
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                            <v-btn flat color="primary" @click="save">OK</v-btn>
                          </v-card-actions>
                        </template>
                      </v-date-picker>
                    </v-dialog>
                  </v-flex>
                  <v-spacer></v-spacer>
                  <v-flex xs5>
                    <v-dialog
                      persistent
                      v-model="modal2"
                      lazy
                      full-width
                    >
                      <v-text-field
                        slot="activator"
                        label="Pick Time"
                        v-model="time"
                        prepend-icon="timer"
                        readonly
                      ></v-text-field>
                      <v-time-picker  v-model="time" scrollable actions>
                        <template slot-scope="{ save, cancel }">
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                            <v-btn flat color="primary" @click="save">OK</v-btn>
                          </v-card-actions>
                        </template>
                      </v-time-picker>
                    </v-dialog>
                  </v-flex>
                </v-layout>
                <v-text-field
                  label="Info Displaying"
                  v-model="infoDisplaying"
                  multi-line
                ></v-text-field>
                <v-text-field
                label="Additional Details"
                v-model="additionalDetails"
                v-
                multi-line
              ></v-text-field>
                <v-btn
                  @click="submit"
                  :disabled="!valid"
                >
                  submit
                </v-btn>
                <v-btn @click="clear">clear</v-btn>
              </v-form>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>

  export default {
    name: 'newTask',
    data() {
      return {
        taskName: '',
        locationFrom: '',
        locationTo: '',
        infoDisplaying: '',
        additionalDetails: '',
        date: null,
        time: null,
        modal: false,
        modal2: false,
      };
    },
  };
</script>

<style scoped>

</style>
