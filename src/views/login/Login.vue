<template>
  <div class="login mx-12 mt-5 d-flex justify-center">
    <v-hover v-slot:default="{ hover }">
      <v-card
        @click="loginDialog = true; selectedUser = tandoraz"
        :elevation="hover ? 12 : 2"
        class="mx-2 my-2"
        width="150px"
        height="150px"
      >
        <v-img
          width="150px"
          class="white--text align-end"
          src="https://us.123rf.com/450wm/kritchanut/kritchanut1406/kritchanut140600112/29213222-stock-vector-male-silhouette-avatar-profile-picture.jpg?ver=6"
        >
          <v-card-title>Tandoraz</v-card-title>
        </v-img>
      </v-card>
    </v-hover>
    <v-hover v-slot:default="{ hover }">
      <v-card
        @click="loginDialog = true; selectedUser = fibi"
        :elevation="hover ? 12 : 2"
        class="mx-2 my-2"
        width="150px"
        height="150px"
      >
        <v-img
          width="150px"
          class="white--text align-end"
          src="https://us.123rf.com/450wm/kritchanut/kritchanut1406/kritchanut140600112/29213222-stock-vector-male-silhouette-avatar-profile-picture.jpg?ver=6"
        >
          <v-card-title>Fibi</v-card-title>
        </v-img>
      </v-card>
    </v-hover>
    <v-hover v-slot:default="{ hover }">
      <v-card
        @click.stop="dialog = true"
        :elevation="hover ? 12 : 2"
        class="mx-2 my-2"
        width="150px"
        height="150px"
      >
        <div class="d-flex justify-center align-center">
          <v-icon x-large style="width: 150px; height: 150px;">add</v-icon>
        </div>
      </v-card>
    </v-hover>

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

    <v-dialog v-model="loginDialog" max-width="600px">
      <v-card>
        <v-card-text class="pt-12 pb-0">
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
            :error-messages="loginError"
            autofocus
            outlined
            @keyup.native.enter="login"
          >
          </v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn color="primary" text @click="login">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import firebase from 'firebase/app';

  export default {
    name: "login",
    components: {},
    data: () => ({
      dialog: false,
      loginDialog: false,
      tandoraz: process.env.VUE_APP_TANDORAZ,
      fibi: process.env.VUE_APP_FIBI,
      password: '',
      selectedUser: '',
      loginError: ''
    }),
    methods: {
      login: function () {
        firebase.auth().signInWithEmailAndPassword(this.selectedUser, this.password)
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
