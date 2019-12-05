<template>
  <v-container class="movie" :style="{ backgroundImage: 'url(' +(backdrop) + ')' }">
    <pre>{{ movie }}</pre>
    <v-img :src="poster"/>
  </v-container>
</template>

<script lang="ts">
  import tmdb from "../../plugins/tmdb";
  import {Movie} from "@/model";

  export default {
    name: "movie",
    data: () => ({
      movie: {} as Movie
    }),
    computed: {
      poster: function (): string {
        return `${tmdb.getImageBaseUrl()}${tmdb.getPosterSize(500)}${this.movie.poster_path}`;
      },
      backdrop: function (): string {
        return `${tmdb.getImageBaseUrl()}original${this.movie.backdrop_path}`;
      }
    },
    mounted: function () {
      console.log(this.$route.meta.movie);
      this.movie = this.$route.meta.movie.data;
    }
  };
</script>
