<template>
  <div class="catalog-container">
    <div class="catalog-title">
      <h4 class="lastest-post">
        Detail {{ detail.name }}
      </h4>
    </div>
    <div class="main-catalog">
      <div class="card">
        <img class="card-img-top" :src="detail.image" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">
            {{ detail.name }}
          </h5>
        </div>
      </div>
    </div>
    <!-- ProductInfo -->
    <div>
      <ProductInfo />
    </div>
  </div>
</template>

<script>
import ProductInfo from '@/components/ProductInfo'
export default {
  components: {
    ProductInfo
  },
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
      }],
      detail: {
        id: '',
        name: '',
        image: ''
      }
    }
  },
  created() {
    const _id = this.$route.params.id
    this.detail = {
      id: _id,
      name: this.catalogs[_id - 1].name,
      image: this.catalogs[_id - 1].image
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.catalog-container {
  margin-bottom: 130px;
}
</style>
