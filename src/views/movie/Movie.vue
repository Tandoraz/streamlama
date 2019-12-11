<template>
  <v-container class="movie">
    <v-parallax :src="backdrop" style="margin-top: -12px" />
    <div class="d-flex">
      <v-img :src="poster" width="200px"/>
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
          <v-btn class="ma-2" dark fab outlined small color="primary" v-if="hasHomepage" @click="openHomepage()">
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
        <p>{{ movie.release_date }} - {{ movie.status }}</p>
      </div>
    </div>


    <v-tabs dark centered style="margin-left: -12px; margin-right: -24px">
      <v-tabs-slider />

      <v-tab :href="'#cast'">Cast</v-tab>
      <v-tab :href="'#similar'">Similar</v-tab>
      <v-tab :href="'#other'">Other</v-tab>

      <v-tab-item :value="'cast'">
        <div v-if="movie.credits && movie.credits.cast">
          <h2>Cast:</h2>
          <div class="d-flex flex-wrap">
            <person-card v-for="cast in movie.credits.cast" :key="cast.id" :person="cast" :orientation="'portrait'"/>
          </div>
        </div>
      </v-tab-item>
      <v-tab-item :value="'similar'">
        <div v-if="movie.similar && movie.similar.results">
          <h2>Similar Movies:</h2>
          <div class="d-flex flex-wrap">
            <movie-card v-for="movie in movie.similar.results" :key="movie.id" :movie="movie" :orientation="'portrait'"/>
          </div>
        </div>
      </v-tab-item>
      <v-tab-item :value="'other'">
        <div>
          <pre>{{ movie }}</pre>
        </div>
      </v-tab-item>

    </v-tabs>
  </v-container>
</template>

<script lang="ts">
  import tmdb from "../../plugins/tmdb";
  import {MovieDetail} from "@/model";
  import MovieCard from "@/components/mediaCard/MovieCard.vue";
  import PersonCard from "@/components/mediaCard/PersonCard.vue";
  import firebase from "firebase";

  export default {
    name: "movie",
    components: {
      MovieCard,
      PersonCard
    },
    data: () => ({
      movie: {} as MovieDetail
    }),
    methods: {
      openHomepage: function () {
        window.open(this.movie.homepage, '_blank');
      }
    },
    computed: {
      poster: function (): string {
        return `${tmdb.getImageBaseUrl()}${tmdb.getPosterSize(500)}${this.movie.poster_path}`;
      },
      backdrop: function (): string {
        return `${tmdb.getImageBaseUrl()}original${this.movie.backdrop_path}`;
      },
      hasHomepage: function (): boolean {
        return !!this.movie.homepage;
      }
    },
    mounted: function () {
      console.log(this.$route.meta.movie.data);
      this.movie = this.$route.meta.movie.data;
    }
  };
</script>
