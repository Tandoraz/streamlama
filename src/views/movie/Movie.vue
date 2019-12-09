<template>
  <v-container class="movie">
    <div class="d-flex">
      <v-img :src="poster" width="500px"/>
      <div>
        <v-badge>
          <template v-slot:badge>
            <span>{{ movie.vote_average }}</span>
          </template>
          <h1>{{ movie.title }}</h1>
        </v-badge>
        <p class="subtitle-2">{{ movie.tagline }}</p>
        <div>{{ movie.overview }}</div>
        <div>
          <v-btn class="ma-2" dark fab outlined small color="primary">
            <v-icon dark>home</v-icon>
          </v-btn>
          <v-btn class="ma-2" dark fab outlined small color="primary">
            <v-icon dark>remove_red_eye</v-icon>
          </v-btn>
          <v-btn class="ma-2" dark fab outlined small color="primary">
            <v-icon dark>list</v-icon>
          </v-btn>
          <v-btn class="ma-2" text small color="primary">
            <v-icon dark>play_arrow</v-icon>
            Play Trailer
          </v-btn>
        </div>
        <a :href="movie.homepage">Homepage</a>
        <p>{{ movie.release_date }} - {{ movie.status }}</p>
      </div>
    </div>
    <div v-if="movie.similar && movie.similar.results">
      <h2>Similar Movies:</h2>
      <div class="d-flex flex-wrap">
        <movie-card v-for="movie in movie.similar.results" :key="movie.id" :movie="movie" :orientation="'portrait'"/>
      </div>
    </div>
    <div v-if="movie.credits && movie.credits.cast">
      <h2>Crew:</h2>
      <div class="d-flex flex-wrap">
        <person-card v-for="cast in movie.credits.cast" :key="cast.id" :person="cast" :orientation="'portrait'"/>
      </div>
    </div>
    <v-img :src="backdrop" contain/>
    <pre>{{ movie }}</pre>
  </v-container>
</template>

<script lang="ts">
  import tmdb from "../../plugins/tmdb";
  import {MovieDetail} from "@/model";
  import MovieCard from "@/components/mediaCard/MovieCard.vue";
  import PersonCard from "@/components/mediaCard/PersonCard.vue";

  export default {
    name: "movie",
    components: {
      MovieCard,
      PersonCard
    },
    data: () => ({
      movie: {} as MovieDetail
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
      console.log(this.$route.meta.movie.data);
      this.movie = this.$route.meta.movie.data;
    }
  };
</script>
