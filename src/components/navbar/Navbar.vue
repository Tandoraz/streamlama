<template>
  <v-app-bar app>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />
    </div>
    <v-toolbar-title class="headline">
      <span class="font-weight-light">
        <b>S</b>tream<b>L</b>ama
      </span>
    </v-toolbar-title>

    <v-toolbar-items class="ml-5" v-if="isLoggedIn">
      <v-btn text @click="to('/')">Home</v-btn>
      <v-btn text @click="to('/')">Browse</v-btn>
      <v-btn text @click="to('/about')">About</v-btn>
    </v-toolbar-items>

    <v-spacer/>

    <v-menu left bottom absolute v-if="isLoggedIn">
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>person</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item @click="logout">
          <v-list-item-icon>
            <v-icon>exit_to_app</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
        <v-list-item @click="() => {}">
          <v-list-item-icon>
            <v-icon>more_vert</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Settings</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
import firebase from 'firebase/app';

export default Vue.extend({
  name: "Navbar",
  data: () => ({
    show: false
  }),
  computed: {
    isLoggedIn: function() {
      return !!firebase.auth().currentUser
    }
  },
  methods: {
    to: function(route: string) {
      this.$router.push(route);
    },
    logout: function () {
      firebase.auth().signOut().then(() => {
        this.$router.push('login');
      })
    }
  }
});
</script>
