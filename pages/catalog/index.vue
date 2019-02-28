<template>
  <section class="container">
    <div class="wrapper-catalog">
      {{ $route.params.id }}
      <Catalog :id="$route.params.id"/>
    </div>
  </section>
</template>

<script>
import Catalog from '~/components/Catalog.vue'
export default {
  components: {
    Catalog
  }
}
</script>

<style scoped>
@import '../../assets/styles/default.css';
</style>
