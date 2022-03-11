import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    donation: {
      atasan: 8,
      luaran: 12,
      bawahan: 4,
      dress: 5
    }
  },
  mutations: {
    setDonation (state, payload) {
      state.donation.atasan += Number(payload.atasan)
      state.donation.bawahan += Number(payload.bawahan)
      state.donation.dress += Number(payload.dress)
      state.donation.luaran += Number(payload.luaran)
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getAllDonation (state) {
      return state.donation
    }
  }
})
