<template>
  <v-app>
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
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light"><b>S</b>tream<b>L</b>ama</span>
      </v-toolbar-title>

      <v-toolbar-items>
        <v-btn text @click="to('/')">Home</v-btn>
        <v-btn text @click="to('/about')">About</v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>person</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App',
  data: () => ({
    //
  }),
  methods: {
    to: function(path: string) {
      this.$router.push(path)
    }
  }
})
</script>
