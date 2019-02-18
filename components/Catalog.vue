<template>
  <div class="catalog-container">
    <div class="main-catalog">
      <div v-for="(catalog, idx) in catalogs" :key="idx" class="card-type-3">
        <nuxt-link :to="'/details/' + catalog.id">
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
      }, {
        id: 5,
        name: 'product 5',
        image: 'http://demo.posthemes.com/pos_vonia/36-large_default/printed-dress.jpg'
      }, {
        id: 6,
        name: 'product 6',
        image: 'http://demo.posthemes.com/pos_vonia/layout3/71-home_default/printed-summer-dress.jpg'
      }],
      isMouseOver: false
    }
  },
  methods: {
    doHover(idx) {
      this.isMouseOver = true
      console.log(idx, ' a')
    }
  }
}
</script>

<style>
  .catalog-container {
    display: flex;
    width: 100%;
  }

  .main-catalog {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    margin: 2rem;
  }

  .card-type-3 {
    display: flex;
    width: 25%;
    justify-content: center;
    padding: 0;
  }

  .card {
    padding: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .card:hover {
    padding: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    -webkit-box-shadow: 1px 1px 1px 1px #ccc;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
    -moz-box-shadow:    1px 1px 1px 1px #ccc;  /* Firefox 3.5 - 3.6 */
    box-shadow:         0px 3px 6px -1.5px #ccc;  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
    /* -webkit-transform: scale(1.05);
    transform: scale(1.05); */
    /* border-bottom: 1px solid #e5e5e5; */
    cursor: pointer;
  }

  .card-img-top {
    display: flex;
    width: 100%;
    height: auto;
  }

  .card-title {
    /* line-height: 45; */
    font-family: lato;
    color: #363636;
    padding: 5px 0;
    display: block;
    line-height: 25px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 15px;
  }

  .card-title {
    display: flex;
    justify-content: center;
    line-height: 30px;
    /* margin-top: 10px; */
    font-size: 12px;
    text-transform: uppercase;
    /* font-weight: 700; */
    width: 100%;
    color: #363636;
    background: white;
    width: 100%;
    opacity: 1;
    transition: all 500ms ease-in;
  }

</style>
