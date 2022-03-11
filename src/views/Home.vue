<template>
<div class="wrapper">
  <div class="hero">
    <div class="left-side">
      <img :src="heroImage" alt="nature photo">
    </div>
    <div class="right-side">
      <h1>Selamatkan Bumi.</h1>
      <p>kami memiliki misi untuk menyelamatkan Bumi dengan mengambil <span>aksi nyata</span>.</p>
      <div>
        <action-button url="/donate">
          Mulai Beraksi
        </action-button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import heroImage from '../../public/image/hero-image.jpg'
import ActionButton from '../components/ActionButton.vue'

export default {
  name: 'Home',
  data () {
    return {
      heroImage 
    }
  },
  components: {
    'action-button': ActionButton
  }
}
</script>

<style lang="scss">
  .hero {
    padding: $container;
    padding-top: 3em;
    display: grid;
    grid-template-columns: 3fr 4fr;
    color: $dark-blue;

    .left-side {
      img {
        width: 100%;
        border-radius: 3em;
        box-shadow: $box-shadow;
      }
    }

    .right-side {
      margin-left: 4em;
      display: flex;
      flex-direction: column;
      justify-content: center;
      h1 {
        font-size: 3em;
        font-weight: bold;
      }
      p {
        margin-top: .5em;
        margin-bottom: 2em;
        color: $secondary;
        
        span {
          font-weight: bold;
          font-style: italic;
        }
      }
    }
  }
</style>