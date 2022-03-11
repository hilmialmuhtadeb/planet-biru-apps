<template>
  <div>
    <div class="banner">
      <h1>Lokasi Kotak Penyelamat</h1>
    </div>
    <div class="wrapper">
      <p class="info">
        <span>&#8505;</span> Kotak penyelamat adalah dropbox untuk mengirimkan pakaian bekas milik planet biru squad.
      </p>
      <div class="locations">
        <div class="location-card" v-for="location of locations" :key="location.phone">
          <h4>{{ location.city }}</h4>
          <p class="phone">{{ location.phone }}</p>
          <p>{{ location.address }}</p>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import locations from '@/data/locations.js'

export default {
  data() {
    return {
      locations: locations.locations,
    }
  }
}
</script>

<style lang="scss">
  .banner {
    background-image: url('../../public/image/dropbox.jpg');
    background-position: bottom;
    background-size: cover;
    padding: 8em 0;
    font-size: 1.2em;
    text-align: center;
    color: white;
    text-shadow: 0px 0px 2px rgba(255, 255, 255, 0.527);
  }

  .wrapper {
    padding: $container;
    
    .info {
      margin: 2em 0;
      
      span {
        margin-right: 1em;
      }
    }
  }

  .locations {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2em;
    margin: 2em 0;
    color: $secondary;

    .location-card {
      border-radius: 1em;
      padding: 1em;
      box-shadow: $box-shadow;

      h4 {
        color: $orange;
        font-weight: bold;
        font-size: 1.2em;
      }

      p.phone {
        margin: .5em 0 1em;
      }
    }
  }
</style>