<template>
  <v-card class="mx-1 my-2 card-serie" @click="openMedia">
    <div class="title-serie">{{serie.name}}</div>
    <v-img v-if="hasPicture" :src="imageUrl" class="poster"/>
    <div v-else class="d-flex jusifiy-content default-poster">
      <v-icon x-large disabled class="default-icon">tv</v-icon>
    </div>
  </v-card>
</template>

<style lang="scss">
  .card-serie {
    max-width: 344px;

    .poster, .default-poster {
      width: 200px;
      height: 300px;
      border-radius: 4px;
    }

    .default-icon {
      width: 100%;
    }

    &:hover .title-serie {
      opacity: 1;
      transform: translateY(0%);
    }

    .title-serie {
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
  import tmdb from "../../plugins/tmdb";
  import {SearchSerie} from "@/model";

  export default Vue.extend({
    name: "MediaCard",
    props: {
      serie: {
        type: Object as () => SearchSerie
      },
      orientation: {
        type: String as () => "portrait" | "landscape",
        default: "portrait"
      }
    },
    data: () => ({
      show: false
    }),
    computed: {
      imageUrl: function (): string {
        if (this.isLandscape) {
          return `${tmdb.getImageBaseUrl()}${tmdb.getBackdropSize()}/${
            this.serie.backdrop_path
          }`;
        }
        return `${tmdb.getImageBaseUrl()}${tmdb.getPosterSize()}/${
          this.serie.poster_path
        }`;
      },
      hasPicture: function (): boolean {
        if (this.isLandscape) {
          return !!this.serie.backdrop_path;
        }
        return !!this.serie.poster_path;
      },
      isLandscape: function (): boolean {
        return this.orientation === "landscape";
      }
    },
    methods: {
      openMedia: function () {
        this.$router.push(`/serie/${this.serie.id}`);
      }
    }
  });
</script>
