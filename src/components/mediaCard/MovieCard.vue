<template>
  <v-card class="mx-1 my-2 card-movie" @click="openMedia()">
    <div class="title-movie">{{ movie.title }}</div>
    <v-img v-if="hasPicture" :src="imageUrl" width="200px" height="300px" class="poster"/>
    <div v-else class="d-flex jusifiy-content default-poster">
      <v-icon x-large disabled class="default-icon">movie</v-icon>
    </div>
  </v-card>
</template>

<style lang="scss">
  .card-movie {
    max-width: 344px;

    .poster, .default-poster {
      border-radius: 4px;
      width: 200px;
      height: 300px;
    }

    .default-icon {
      width: 100%;
    }

    &:hover .title-movie {
      opacity: 1;
      transform: translateY(0%);
    }

    .title-movie {
      position: absolute;
      z-index: 2;
      opacity: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      transform: translateY(20%);
      transition: all 0.55s ease;

      padding: 0.5rem;
      background: rgba(0, 0, 0, 0.7);
      border-top-left-radius: 0 !important;
      border-top-right-radius: 0 !important;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
</style>

<script lang="ts">
  import Vue from "vue";
  import tmdb from "@/plugins/tmdb";
  import {SearchMovie} from "@/model";

  export default Vue.extend({
    name: "MovieCard",
    props: {
      movie: {
        type: Object as () => SearchMovie
      },
      orientation: {
        type: String as () => "portrait" | "landscape",
        default: "portrait"
      }
    },
    data: () => ({}),
    computed: {
      imageUrl: function (): string {
        if (this.isLandscape) {
          return `${tmdb.getImageBaseUrl()}${tmdb.getBackdropSize()}/${
            this.movie.backdrop_path
          }`;
        }
        return `${tmdb.getImageBaseUrl()}${tmdb.getPosterSize()}/${
          this.movie.poster_path
        }`;
      },
      hasPicture: function (): boolean {
        if (this.isLandscape) {
          return !!this.movie.backdrop_path;
        }
        return !!this.movie.poster_path;
      },
      isLandscape: function (): boolean {
        return this.orientation === "landscape";
      }
    },
    methods: {
      openMedia: function () {
        this.$router.push(`/movie/${this.movie.id}`);
      }
    }
  });
</script>
