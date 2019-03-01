<template>
  <section class="container">
    <div class="wrapper-catalog">
      <Catalog :id="$route.query.id"/>
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
