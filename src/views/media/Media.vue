<template>
  <div class="media">
    <Search />
  </div>
</template>

<script>
// @ is an alias to /src
import Search from '@/components/search/Search.vue'

export default {
  name: 'media',
  components: {
    Search
  }
}
</script>
