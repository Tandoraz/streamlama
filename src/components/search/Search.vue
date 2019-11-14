<template>
  <div>
    <v-text-field
      flat
      solo-inverted
      hide-details
      label="Search"
      class="hidden-sm-and-down"
      v-on:change="search()"
      v-model="searchQuery"
    ></v-text-field>

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
      this.searchService.search(this.searchQuery).then(result => {
        console.log(result);
        this.searchResponse = result.data;
      });
    }
  }
});
</script>
