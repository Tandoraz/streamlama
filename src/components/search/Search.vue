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

    <MediaCard></MediaCard>
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
    searchResult: []
  }),
  components: {
    MediaCard
  },
  methods: {
    search: function() {
      this.searchService.search(this.searchQuery).then(result => {
        console.log(result);
      });
    }
  }
});
</script>
