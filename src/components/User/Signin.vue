<template>
  <v-container class="my-2">
    <v-layout row wrap>
      <v-flex
        xs12 sm6 offset-sm3
      >
        <h4>Sign In</h4>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-form @submit.prevent="onSignin">
              <v-text-field
                label="Mail"
                v-model="email"
                required
              ></v-text-field>

              <v-text-field
                label="Password"
                v-model="password"
                type="password"
                required
              ></v-text-field>


              <v-btn
                type="submit"
                class="primary--text mx-0"
                :disabled="!formIsValid"
              >Sign In</v-btn>
              <p v-text="error"></p>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default{
    data() {
      return {
        email: '',
        password: '',
        error: '',
      };
    },
    computed: {
      formIsValid() {
        return this.email !== '' && this.password !== '';
      },
      user() {
        return this.$store.getters.user;
      },
      signError() {
        this.error = this.$store.getters.signError;
        return this.$store.getters.signError;
      },
    },
    watch: {
      user(value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/');
        }
      },
    },
    methods: {
      onSignin() {
        this.$store.dispatch('signin', { email: this.email, password: this.password });
      },
    },
  };
</script>
