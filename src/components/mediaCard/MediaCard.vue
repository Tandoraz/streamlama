<template>
  <div>
    <movie-card v-if="isMovie" :movie="media"/>
    <serie-card v-if="isSerie" :serie="media"/>
    <person-card v-if="isPerson" :person="media"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {SearchResult} from "../search/search.service";
import MovieCard from "./MovieCard.vue";
import SerieCard from "./SerieCard.vue";
import PersonCard from "./PersonCard.vue";

export default Vue.extend({
  name: "MediaCard",
  components: {
    MovieCard,
    SerieCard,
    PersonCard
  },
  props: {
    media: Object as () => SearchResult
  },
  data: () => ({
    show: false
  }),
  computed: {
    isMovie: function() {
      return this.media.media_type === "movie";
    },
    isSerie: function () { 
      return this.media.media_type === "tv";
    },
    isPerson: function(): boolean {
      return this.media.media_type === "person";
    }
  }
});
</script>
