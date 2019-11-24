<template>
  <v-app>
    <navbar />

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '@/components/navbar/Navbar.vue'

export default Vue.extend({
  name: 'App',
  components: {
    Navbar
  },
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
