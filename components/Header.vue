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
      <nuxt-link to="/kitchen-set" class="menu">
        KITCHEN SET
      </nuxt-link>
      <nuxt-link to="/bedroom" class="menu">
        BED ROOM
      </nuxt-link>
      <nuxt-link to="/chair-table" class="menu">
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

<style>
.header-container {
  display: flex;
  width: 100%;
  flex-direction: column;
}

.header-title {
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;
}

.header-menu {
  display: flex;
  widows: 100%;
  flex-direction: row;
  justify-content: center;
  padding-top: 2.5rem;
}

.menu {
  font-weight: 900;
  padding: 0.5rem;
  cursor: pointer;
}

.menu:hover {
  font-weight: 900;
  padding: 0.5rem;
  cursor: pointer;
  color: slategray;
}

a:-webkit-any-link {
  color: black;
  cursor: pointer;
  text-decoration: none;
}
</style>
