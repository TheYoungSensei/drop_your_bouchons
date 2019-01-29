import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nbPlasticStoppers: 3000,
    donators: [
      {
        id: 1,
        fullname: 'Gallois Clément',
        stoppers: 1000
      },
      {
        id: 2,
        fullname: 'Delvaux Loïc',
        stoppers: 700
      },
      {
        id: 3,
        fullname: 'Stref Ninon',
        stoppers: 600
      },
      {
        id: 4,
        fullname: 'Perchet Manaëlle',
        stoppers: 500
      },
      {
        id: 5,
        fullname: 'Sacré Christopher',
        stoppers: 200
      }
    ],
    firstPlace: 1,
    secondPlace: 2,
    thirdPlace: 3,
  },
  mutations: {

  },
  actions: {

  }
})
