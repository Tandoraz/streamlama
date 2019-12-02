<template>
  <v-card class="mx-1 my-2 serie-card" max-width="344" @click="openMedia">
    <div class="serie-title">{{serie.name}}</div>
    <v-img v-if="hasPicture" :src="imageUrl" width="200px" height="300px" class="poster"></v-img>
    <div v-else style="width: 200px; height: 300px" class="d-flex jusifiy-content">
      <v-icon x-large disabled style="width: 100%;">tv</v-icon>
    </div>
  </v-card>
</template>

<style lang="scss">
.poster {
  border-radius: 4px;
}
.serie-card:hover .serie-title {
  opacity: 1;
  transform: translateY(0%);
}
.serie-title {
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
</style>

<script lang="ts">
import Vue from "vue";
import { SearchSerie } from "../search/search.service";
import tmdb from "../../plugins/tmdb";

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
    imageUrl: function(): string {
      if (this.isLandscape) {
        return `${tmdb.getImageBaseUrl()}${tmdb.getBackdropSize()}/${
          this.serie.backdrop_path
        }`;
      }
      return `${tmdb.getImageBaseUrl()}${tmdb.getPosterSize()}/${
        this.serie.poster_path
      }`;
    },
    hasPicture: function(): boolean {
      if (this.isLandscape) {
        return this.serie.backdrop_path ? true : false;
      }
      return this.serie.poster_path ? true : false;
    },
    isLandscape: function(): boolean {
      return this.orientation === "landscape";
    }
  },
  methods: {
    openMedia: function() {
      this.$router.push(`/serie/${this.serie.id}`);
    }
  }
});
</script>
