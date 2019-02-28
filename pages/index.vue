<template>
  <section class="container">
    <div class="wrapper-catalog">
      <Latest />
    </div>
  </section>
</template>

<script>
import Latest from '~/components/Latest.vue'
export default {
  components: {
    Latest
  }
}
</script>

<style scoped>
@import '../assets/styles/default.css';
</style>
