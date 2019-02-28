<template>
  <div class="header-container">
    <div class="header-title">
      <!-- <h1>Yus Furniture</h1> -->
      <Logo />
    </div>
    <div class="header-menu">
      <nuxt-link to="/" class="menu">
        ALL
      </nuxt-link>
      <nuxt-link :to="{ name: 'catalog', params: { id: 'kitchen-set' } }" class="menu">
        KITCHEN SET
      </nuxt-link>
      <nuxt-link :to="{ name: 'catalog', params: { id: 'bed-room' } }" class="menu">
        BED ROOM
      </nuxt-link>
      <nuxt-link :to="{ name: 'catalog', params: { id: 'chair-table' } }" class="menu">
        CHAIR & TABLE
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
  components: {
    Logo
  }
}
</script>

<style scoped>
@import '../assets/styles/header.css';
</style>
