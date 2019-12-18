<template>
  <div class="login container">
    <v-row justify="space-around">
      <form class="my-12 px-5">
        <v-alert
          v-if="loginError"
          type="error"
          border="left"
          class="mb-8">
          {{loginError}}
        </v-alert>

        <v-text-field
          v-model="username"
          label="Username"
          type="email"
          outlined
          autofocus
          @keyup.native.enter="login"
        />
        <v-text-field
          v-model="password"
          label="Password"
          type="password"
          outlined
          @keyup.native.enter="login"
        />

        <v-btn color="primary" class="submit-btn mb-3" @click="login">Login</v-btn>
        <div class="text-center">Don't have an account yet? <a @click="dialog = true">Register here</a></div>
      </form>
    </v-row>

    <v-dialog v-model="dialog" max-width="400">
      <v-card>
        <v-card-title class="headline">Register new user</v-card-title>

        <v-card-text>
          Sorry! we currently do not allow to create a profile. <br>
          If you think you are special enough, then please contact us and maybe we add you to this project.
        </v-card-text>

        <v-card-actions>
          <v-spacer/>
          <v-btn text @click="dialog = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<style lang="scss">
  form {
    width: 500px;

    .submit-btn {
      width: 100%;
      height: 54px !important;
    }
    a {
      font-style: italic;
    }
    a:hover {
      text-decoration: underline;
    }
  }
</style>

<script>
  import firebase from 'firebase/app';

  export default {
    name: "login",
    components: {},
    data: () => ({
      dialog: false,
      password: '',
      username: '',
      loginError: ''
    }),
    methods: {
      login: function () {
        firebase.auth().signInWithEmailAndPassword(this.username, this.password)
          .then(() => {
            this.$router.push('home');
          })
          .catch((error) => {
              this.loginError = error.message;
            }
          )
      }
    }
  };
</script>
