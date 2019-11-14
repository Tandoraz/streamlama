<template>
  <v-card class="mx-auto my-2" max-width="344">
    <v-img :src="imageUrl" width="200px" height="300px" @click="openMedia"></v-img>
    <v-card-actions>
      <v-btn color="purple" text @click="openMedia">Explore</v-btn>
      <v-spacer></v-spacer>
      <v-btn icon><v-icon>add</v-icon></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import {SearchMovie, SearchSerie} from "../search/search.service";

export default Vue.extend({
  name: "MediaCard",
  props: {
    media: Object,
  },
  data: () => ({
    show: false
  }),
  computed: {
    imageUrl: function () {
      let endPath = (this.media.poster_path ? this.media.poster_path : this.media.profile_path) 
      return "https://image.tmdb.org/t/p/w200" + endPath;
    }
  },
  methods: {
    openMedia: function() {
      this.$router.push('about')
    }
  }
});
</script>
