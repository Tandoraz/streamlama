<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
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
