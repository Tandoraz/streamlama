<template>
  <div class="nav">

    <v-app-bar app class="navbar" color="#303030" elevation="0">
      <v-btn text icon dark @click="mini = !mini">
        <v-icon>menu</v-icon>
      </v-btn>
      <v-toolbar-title class="headline">
        <b>S</b>tream<b>L</b>ama
      </v-toolbar-title>

      <v-spacer/>
      <v-btn text @click="logout()">
        Sign out <v-icon class="ml-3">exit_to_app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-if="isLoggedIn" floating :mini-variant="mini" color="#202020">

      <v-list>
        <v-list-item link @click="to('/')">
          <v-list-item-icon><v-icon>home</v-icon></v-list-item-icon>
          <v-list-item-content><v-list-item-title>Home</v-list-item-title></v-list-item-content>
        </v-list-item>
        <v-list-item link @click="to('/')">
          <v-list-item-icon><v-icon>dashboard</v-icon></v-list-item-icon>
          <v-list-item-content><v-list-item-title>Browse</v-list-item-title></v-list-item-content>
        </v-list-item>
        <v-list-item link @click="to('/about')">
          <v-list-item-icon><v-icon>settings</v-icon></v-list-item-icon>
          <v-list-item-content><v-list-item-title>Settings</v-list-item-title></v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>

  </div>
</template>

<style lang="scss">
  .navbar {

    .headline {
      font-weight: 200 !important;
      padding-left: .5rem !important;

      b {
        font-weight: 300;
      }
    }

  }
</style>

<script lang="ts">
  import Vue from "vue";
  import firebase from 'firebase/app';

  export default Vue.extend({
    name: "Navbar",
    data: () => ({
      show: false,
      mini: false
    }),
    computed: {
      isLoggedIn: function () {
        return !!firebase.auth().currentUser
      }
    },
    methods: {
      to: function (route: string) {
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
