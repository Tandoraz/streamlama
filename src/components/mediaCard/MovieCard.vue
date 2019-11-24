<template>
  <v-card class="mx-1 my-2" max-width="344">
    <v-img v-if="hasPicture" :src="imageUrl" width="200px" height="300px" @click="openMedia"></v-img>
    <div v-else style="width: 200px; height: 300px" class="d-flex jusifiy-content" @click="openMedia">
      <v-icon x-large disabled style="width: 100%;">movie</v-icon>
    </div>
    <v-card-actions>
      <v-btn color="purple" text @click="openMedia">Explore</v-btn>
      <v-spacer></v-spacer>
      <v-btn icon><v-icon>add</v-icon></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import {SearchMovie} from "../search/search.service";

export default Vue.extend({
  name: "MovieCard",
  props: {
    movie:  {
      type: Object as () => SearchMovie
    }
  },
  data: () => ({
  }),
  computed: {
    imageUrl: function () { 
      return "https://image.tmdb.org/t/p/w200" + this.movie.poster_path;
    },
    hasPicture: function() {
      return this.movie.poster_path ? true : false
    },
  },
  methods: {
    openMedia: function() {
      this.$router.push(`/movie/${this.movie.id}`)
    },
  }
});
</script>
