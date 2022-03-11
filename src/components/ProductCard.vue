<template>
  <div class="card">
    <img :src="product.url" :alt="product.name">
    <div class="card-body">
      <h4>{{ product.name }}</h4>
      <p>{{product.description}}</p>
      <div class="counter">
        <input type="number" class="input-number" value="countNumber" v-model="count">
      </div>
    </div>
  </div>
</template>

<script>
// import ActionButton from '@/components/ActionButton'
// import QuantityCounter from '@/components/QuantityCounter'

export default {
  props: ['product', 'countNumber'],
  components: {
    // 'action-button': ActionButton,
    // 'quantity-counter': QuantityCounter
  },
  data() {
    return {
      count: 0,
    }
  },
  watch: {
    count: function() {
      this.count = this.count < 1 ? 0 : this.count
      this.$emit('countChange', [
        this.product.name,
        this.count
      ])
    }
  }
}
</script>

<style lang="scss">
  .card {
    color: $secondary;
    border-radius: 0 0 1em 1em;
    transition: .3s;
    box-shadow: 0 0 20px -4px rgba(0, 0, 0, 0.2);
    
    img {
      width: 100%;
      height: 16em;
      object-fit: cover;
      object-position: top;
      border-radius: 1em 1em 0 0;
    }

    h4 {
      font-size: 1.2em;
      color: $black;
    }
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1; /* number of lines to show */
              line-clamp: 1; 
      -webkit-box-orient: vertical;
    }

    button {
      display: block;
      width: 100%;
      margin-top: 1em;
    }

    .card-body {
      padding: .5em 1em 2em;

      > .counter {
        margin-top: 1.2em;

        .input-number {
          width: 100%;
          padding: 1em;
          text-align: center;
          border-radius: 1em;
          border: 2px solid $blue;
          font-size: 1em;
        }
      }
    }
  }

  .card:hover {
    // cursor: pointer;
    box-shadow: $box-shadow;
  }
</style>