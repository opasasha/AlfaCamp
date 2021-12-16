<template>
  <div class="home">
    <search></search>
  </div>
</template>

<script>
import SearchApp from'@/components/searchApp.vue'
export default {
  name: 'Home',
  components: {
    search:SearchApp
  }
}
</script>
