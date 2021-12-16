<template>
    <div class="home">
      <weather></weather>
    </div>
</template>

<script>
  import weatherApp from'@/components/weatherApp.vue'
  export default {
    name: 'Home',
    components: {
      weather:weatherApp
    }
  }
</script>