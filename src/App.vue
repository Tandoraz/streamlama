<template>
  <v-app>

    <navbar/>

    <v-content>
      <router-view/>
    </v-content>

    <footer/>

  </v-app>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Navbar from '@/components/navbar/Navbar.vue'
  import Footer from "@/components/footer/Footer.vue";

  export default Vue.extend({
    name: 'App',
    components: {
      Navbar,
      Footer
    },
    data: () => ({
      //
    }),
    methods: {
      to: function (path: string) {
        this.$router.push(path)
      }
    }
  })
</script>
