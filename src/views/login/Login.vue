<template>
  <div class="login mx-12 mt-5 d-flex justify-center">
    <v-hover v-slot:default="{ hover }">
      <v-card
        @click="login('tandoraz')"
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
        @click="login('fibi')"
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
        <div width="150px" height="150px" class="d-flex justify-center align-center">
          <v-icon x-large style="width: 150px; height: 150px;">add</v-icon>
        </div>
      </v-card>
    </v-hover>

    <v-dialog v-model="dialog" max-width="400">
      <v-card>
        <v-card-title class="headline">Registrate new user</v-card-title>

        <v-card-text>
          Sorry! we currently do not allow to create a profile. <br>
          If you think you are special enough, then please contact us and maybe we add you to this project.
          </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="dialog = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: "login",
  components: {},
  data: () => ({
    dialog: false
  }),
  methods: {
    login: function(username) {
      console.log("login with " + username);
      firebase.auth().signInWithEmailAndPassword('email', 'password')
        .then(() => {
          // TODO make login
        })
        .catch((error) => {
          // TODO show error
        })
    }
  }
};
</script>
