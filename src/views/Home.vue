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
    <section id="climate">
      <div class="left-side">
        <h2>Industri Fast Fashion Menjadi Salah Satu Perusak Iklim Dunia</h2>
        <p>Fast fashion dapat menimbulkan pencemaran air, kerusakan lingkungan karena penggunaan bahan kimia beracun. Demi mendapatkan bahan yang lebih murah dan dapat di produksi dengan cepat, industri mode sering mengabaikan bahayanya bahan kimia yang terdapat dalam produk mereka.</p>
        <p>Faktanya, 10% emisi karbon dunia disumbang oleh industri fashion. Pembuatan satu kaos juga memerlukan 2700 liter air, yang menjadikan industri fashion sebagai konsumen air terbesar kedua di dunia. 85% Pakaian yang diproduksi juga berakhir di tempat sampah umum.</p>
        <p class="conclusion">Dengan Planet Biru Apps, kami mengajak para Planet Biru Squad untuk turut berkontribusi dalam menyelamatkan bumi dengan cara mendonasikan pakaian bekas yang dimiliki. Dengan langkah ini, Planet Biru Squad turut membantu mengurangi kerusakan lingkungan. Ayo selamatkan Bumi dengan aksi nyata.</p>
        <div>
          <action-button url="/donate">
            Mulai Beraksi
          </action-button>
        </div>
      </div>
      <div class="right-side">
        <img src="image/fast-fashion.jpg" alt="fast-fashion">
      </div>
    </section>
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
    padding-top: 8em;
    padding-bottom: 8em;
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

  #climate {
    background-color: #eaeaea;
    padding: 8em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4em;

    .left-side {
      h2 {
        font-weight: bold;
      }

      p {
        margin: 1em 0;
        color: $secondary;
      }

      .conclusion {
        margin-bottom: 2em;
      }
    }

    .right-side {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 2em;
        box-shadow: $box-shadow;
      }
    }
  }
</style>