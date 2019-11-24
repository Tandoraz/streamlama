<template>
  <v-container class="home">
    <Search />
  </v-container>
</template>

<script>
// @ is an alias to /src
import Search from "@/components/search/Search.vue";

export default {
  name: "home",
  components: {
    Search
  }
};
</script>
