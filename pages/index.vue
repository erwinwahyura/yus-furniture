<template>
  <section class="container">
    <div class="wrapper-header">
      <Header />
    </div>
    <div class="wrapper-catalog">
      <Catalog />
    </div>
  </section>
</template>

<script>
import Header from '~/components/Header.vue'
import Catalog from '~/components/Catalog.vue'
export default {
  components: {
    Header,
    Catalog
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.wrapper-header {
  display: flex;
  width: 100%;
  /* background-color: #F6F5F3; */
  padding: 2.5rem 2.5rem .5rem 2.5rem;
  border-bottom: 1px solid #e5e5e5;
}

.wrapper-catalog {
  display: flex;
  width: 70%;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
