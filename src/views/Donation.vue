<template>
  <div class="donation">
    <h2>Donasikan Pakaianmu</h2>
    <div class="product-wrapper">
      <product-card 
        v-for="product in products" 
        :key="product.name" 
        :product="product"
        :countNumber="tempDonation[product.name]"
        @countChange="handleCountChange"
      />
    </div>
    <div class="button-wrapper">
      <button @click="handleDonation">donasi</button>
    </div>
  </div>
</template>

<script>
import products from '@/data/product.js'
import ProductCard from '@/components/ProductCard.vue'
// import ActionButton from '@/components/ActionButton.vue'
import { mapGetters, mapMutations } from 'vuex'

export default {
  data() {
    return {
      products: products.products,
      tempDonation: {
        atasan: 0,
        luaran: 0,
        bawahan: 0,
        dress: 0
      }    
    }
  },
  components: {
    'product-card': ProductCard,
    // 'action-button': ActionButton
  },
  methods: {
    ...mapMutations([
      'setDonation'
    ]),
    ...mapGetters([
      'getAllDonation'
    ]),
    handleCountChange ([key, count]) {
      this.tempDonation[key] = count
    },
    handleDonation () {
      this.setDonation(this.tempDonation)
      this.tempDonation = {}
      console.log(this.getAllDonation())
    }
  }
}
</script>

<style lang="scss">
  .donation {
    padding: $container;
    padding-top: 4em;

    .product-wrapper {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2em;
      margin: 1em 0;
    }

    .button-wrapper {
      margin: 2em 0;
      
      button {
        color: white;
        width: 100%;
        padding: 1em 0;
      }
    }
  }
</style>