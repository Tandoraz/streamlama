<template>
  <v-card class="mx-1 my-2 card-person" @click="openMedia">
    <v-img v-if="hasPicture" :src="imageUrl" class="poster"/>
    <div v-else class="d-flex jusifiy-content default-poster">
      <v-icon x-large disabled class="default-icon">person_outlined</v-icon>
    </div>
    <div class="person-name">{{ person.name }} <div v-if="isCast"> {{ person.character }}</div></div>
  </v-card>
</template>

<style lang="scss">
  .card-person {
    max-width: 344px;

    .poster, .default-poster {
      border-radius: 4px;
      width: 200px;
      height: 300px;
    }

    .default-icon {
      width: 100%;
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
  }
</style>
<script lang="ts">
  import Vue from "vue";
  import tmdb from "@/plugins/tmdb";
  import {CastMember, SearchPerson} from "@/model";

  export default Vue.extend({
    name: "PersonCard",
    props: {
      person: {
        type: Object as () => SearchPerson | CastMember
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
        return `${tmdb.getImageBaseUrl()}${tmdb.getProfileImageSize()}/${
          this.person.profile_path
        }`;
      },
      hasPicture: function (): boolean {
        return !!this.person.profile_path;
      },
      isLandscape: function (): boolean {
        return this.orientation === "landscape";
      },
      isCast: function(): boolean {
        return this.person.character
      }
    },
    methods: {
      openMedia: function () {
        this.$router.push(`/person/${this.person.id}`);
      }
    }
  });
</script>
