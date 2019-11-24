<template>
  <v-card class="mx-1 my-2" max-width="344">
    <v-img v-if="hasPicture" :src="imageUrl" width="200px" height="300px" @click="openMedia"></v-img>
    <div v-else style="width: 200px; height: 300px" class="d-flex jusifiy-content" @click="openMedia">
      <v-icon x-large disabled style="width: 100%;">person_outlined</v-icon>
    </div>
    <v-card-actions>
      <v-btn color="purple" text @click="openMedia">Explore</v-btn>
      <v-spacer></v-spacer>
      <v-btn icon><v-icon>add</v-icon></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import {SearchPerson} from "../search/search.service";

export default Vue.extend({
  name: "PersonCard",
  props: {
    person:  {
      type: Object as () => SearchPerson
    }
  },
  data: () => ({
    show: false
  }),
  computed: {
    imageUrl: function () { 
      return "https://image.tmdb.org/t/p/w200" + this.person.profile_path;
    },
    hasPicture: function() {
      return this.person.profile_path ? true : false
    }
  },
  methods: {
    openMedia: function() {
      this.$router.push(`/person/${this.person.id}`)
    }
  }
});
</script>
