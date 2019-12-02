<template>
  <v-card class="mx-1 my-2" max-width="344" @click="openMedia">
    <v-img v-if="hasPicture" :src="imageUrl" width="200px" height="300px" class="poster"></v-img>
    <div v-else style="width: 200px; height: 300px" class="d-flex jusifiy-content">
      <v-icon x-large disabled style="width: 100%;">person_outlined</v-icon>
    </div>
    <div class="person-name">{{ person.name }}</div>
  </v-card>
</template>

<style lang="scss">
.poster {
  border-radius: 4px;
}

.person-name {
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0.5rem;
  background: rgba(0, 0, 0, 0.6);
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
</style>
<script lang="ts">
import Vue from "vue";
import { SearchPerson } from "../search/search.service";
import tmdb from "@/plugins/tmdb";

export default Vue.extend({
  name: "PersonCard",
  props: {
    person: {
      type: Object as () => SearchPerson
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
      return `${tmdb.getImageBaseUrl()}${tmdb.getProfileImageSize()}/${
        this.person.profile_path
      }`;
    },
    hasPicture: function(): boolean {
      return this.person.profile_path ? true : false;
    },
    isLandscape: function(): boolean {
      return this.orientation === "landscape";
    }
  },
  methods: {
    openMedia: function() {
      this.$router.push(`/person/${this.person.id}`);
    }
  }
});
</script>
