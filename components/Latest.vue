<template>
  <div class="catalog-container">
    <div class="catalog-title">
      <h4 class="lastest-post">Latest Post</h4>
    </div>
    <div class="main-catalog">
      <div v-for="(catalog, idx) in catalogs" :key="idx" class="card-type-3">
        <nuxt-link :to="'/latest-post/' + catalog.id">
          <div class="card">
            <img class="card-img-top" :src="catalog.image" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">
                {{ catalog.name }}
              </h5>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      catalogs: [{
        id: 1,
        name: 'product 1',
        image: 'http://demo.posthemes.com/pos_vonia/36-large_default/printed-dress.jpg'
      }, {
        id: 2,
        name: 'product 2',
        image: 'http://demo.posthemes.com/pos_vonia/layout3/71-home_default/printed-summer-dress.jpg'
      }, {
        id: 3,
        name: 'product 3',
        image: 'http://demo.posthemes.com/pos_vonia/layout3/58-home_default/printed-dress.jpg'
      }, {
        id: 4,
        name: 'product 4',
        image: 'http://demo.posthemes.com/pos_vonia/layout3/44-home_default/printed-summer-dress.jpg'
      }]
    }
  },
  methods: {
  }
}
</script>

<style>
  @import '../assets/styles/latest.css';
</style>
