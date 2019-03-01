<template>
  <div class="header-container">
    <div class="header-title">
      <h1>Yus Furniture</h1>
      <!-- <Logo /> -->
      <!-- <img src="../assets/yf.png" alt="yf"> -->
    </div>
    <div class="header-menu">
      <nuxt-link to="/" class="menu">
        ALL
      </nuxt-link>
      <nuxt-link :to="{ name: 'catalog', query: { id: 'kitchen-set', name: 'Kitchen Set' } }" class="menu">
        KITCHEN SET
      </nuxt-link>
      <nuxt-link :to="{ name: 'catalog', query: { id: 'bed-room', name: 'Bed Room' } }" class="menu">
        BED ROOM
      </nuxt-link>
      <nuxt-link :to="{ name: 'catalog', query: { id: 'chair-table', name: 'Chair Table' } }" class="menu">
        CHAIR & TABLE
      </nuxt-link>
    </div>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'
export default {
  components: {
    // Logo
  }
}
</script>

<style scoped>
@import '../assets/styles/header.css';
</style>
