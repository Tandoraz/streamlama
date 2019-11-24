<template>
  <div>
    <v-text-field
      flat
      solo
      hide-details
      label="Search"
      class="hidden-sm-and-down"
      prepend-inner-icon="search"
      @keyup="search"
      v-model="searchQuery"
    >
    </v-text-field>

    <div class="d-flex flex-wrap">
      <MediaCard v-for="media in searchResponse.results" :key="media.id" :media="media"></MediaCard>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SearchService from "./search.service";
import MediaCard from "@/components/mediaCard/MediaCard.vue";

export default Vue.extend({
  name: "Search",
  data: () => ({
    searchService: new SearchService(),
    searchQuery: "",
    searchResponse: {}
  }),
  components: {
    MediaCard
  },
  methods: {
    search: function() {
      if (this.searchQuery.length > 2) {
        this.searchService.search(this.searchQuery).then(result => {
          this.searchResponse = result.data;
        });
      }
    }
  }
});
</script>
