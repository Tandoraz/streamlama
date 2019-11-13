<template>
  <div class="home">
    <Search />
  </div>
</template>

<script>
// @ is an alias to /src
import Search from '@/components/search/Search.vue'

export default {
  name: 'home',
  components: {
    Search
  }
}
</script>
