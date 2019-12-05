<template>
  <div>
    <v-text-field
      flat
      solo
      hide-details
      label="Search"
      class="hidden-sm-and-down"
      prepend-inner-icon="search"
      @input="search"
      v-model="searchQuery"
    >
    </v-text-field>

    <div class="search-result-container d-flex flex-wrap justify-center">
      <MediaCard v-for="media in searchResponse.results" :key="media.id" :media="media"/>
    </div>
  </div>
</template>

<style lang="scss">
  // .search-result-container::after {
  //   content: "";
  //   flex: auto;
  // }
</style>

<script lang="ts">
  import Vue from "vue";
  import SearchService from "./search.service";
  import MediaCard from "@/components/mediaCard/MediaCard.vue";
  import debounce from "@/util/debounce";
  import {AxiosResponse} from "axios";
  import {SearchResult} from "@/model";

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
      search: debounce(function()  {
        if (this.searchQuery.length > 2) {
          this.searchService.search(this.searchQuery).then((result: AxiosResponse<SearchResult>) => {
            this.searchResponse = result.data;
          });
        }
      }, 250)
    }
  });
</script>
