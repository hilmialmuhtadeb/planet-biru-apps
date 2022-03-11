<template>
  <div class="profile">
    <div class="left-side">
      <img src="image/profile-placeholder.png" alt="profile">
      <div class="profile-stats">
        <h3>Erich Evander Da Costa</h3>
        <p class="period">Bergabung sejak Januari 2022</p>
        <div class="member">
          <p>Silver Hero</p>
          <p class="points"><span>843 Exp</span></p>
        </div>
        <p class="motivation"><i>Dengan kontribusimu, kamu telah mengurangi emisi karbon dunia.</i></p>
      </div>
    </div>
    <div class="right-side">
      <h4>Yang Telah Kamu Donasikan</h4>
      <div class="products-stat">
        <template v-for="product in products">
          <div class="product-card-stat" :key="product.name">
            <img :src="product.url" :alt="product.name">
            <div class="body">
              <p>{{ product.name }}</p>
              <p><span class="donationCount">{{ donation[product.name] }}</span> item</p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import products from '@/data/product.js'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      products: products.products,
      donation: {}
    }
  },
  methods: {
    ...mapGetters([
      'getAllDonation'
    ])
  },
  mounted() {
    this.donation = this.getAllDonation()
  }
}
</script>

<style lang="scss">
  .profile {
    padding: $container;
    padding-top: 3em;
    display: grid;
    gap: 4em;
    grid-template-columns: 1fr 2fr;
    color: $secondary;

    .left-side {
      img {
        max-width: 100%;
        border-radius: 50%;
        border: 3px solid rgb(180, 180, 180);
      }

      .profile-stats {
        margin-top: 3em;

        .period {
          margin: .5em 0;
        }

        .member {
          background-color: silver;
          padding: .5em 1em;
          border-radius: 1em;
          display: inline-block;
          margin: 1em 0;
          
          p {
            span {
              color: $orange;
              font-weight: bold;
            }
          }
        }

        h3 {
          font-size: 2em;
          margin-bottom: .2em;
          color: black;
        }
        p.motivation {
          margin: 1em 0;
        }
      }
    }

    .right-side {
      padding: 0 2em;
      h4 {
        font-size: 1.2em;
        color: black;
      }
      .products-stat {

        .product-card-stat {
          display: flex;
          margin: 2em 0;
          border-radius: 1em;
          box-shadow: $box-shadow;

          img {
            width: 10em;
            height: 8em;
            object-fit: cover;
            border-radius: 1em 0 0 1em;
          }

          .body {
            padding: 1em;
            width: calc(100%-10em);
            
            p {
              margin: .5em 0;
            }
            .donationCount {
              font-size: 2.4em;
              font-weight: bold;
              color: $orange;
              margin-right: .1em;
            }
          }
        }
      }
    }
  }
</style>