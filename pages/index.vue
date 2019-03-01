<template>
  <section class="container">
    <div class="intro">
      <Description />
    </div>
    <div class="wrapper-catalog">
      <Latest />
    </div>
  </section>
</template>

<script>
import Latest from '~/components/Latest.vue'
import Description from '~/components/Description.vue'
export default {
  components: {
    Latest,
    Description
  }
}
</script>

<style scoped>
@import '../assets/styles/default.css';
</style>
