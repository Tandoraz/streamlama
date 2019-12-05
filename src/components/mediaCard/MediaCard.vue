<template>
  <div>
    <movie-card v-if="isMovie" :movie="media" :orientation="orientation"/>
    <serie-card v-if="isSerie" :serie="media" :orientation="orientation"/>
    <person-card v-if="isPerson" :person="media" :orientation="orientation"/>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import MovieCard from "./MovieCard.vue";
  import SerieCard from "./SerieCard.vue";
  import PersonCard from "./PersonCard.vue";
  import {SearchResult} from "@/model";

  export default Vue.extend({
    name: "MediaCard",
    components: {
      MovieCard,
      SerieCard,
      PersonCard
    },
    props: {
      media: {
        type: Object as () => SearchResult
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
      isMovie: function (): boolean {
        return this.media.media_type === "movie";
      },
      isSerie: function (): boolean {
        return this.media.media_type === "tv";
      },
      isPerson: function (): boolean {
        return this.media.media_type === "person";
      }
    }
  });
</script>
