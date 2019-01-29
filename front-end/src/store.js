import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    totalStoppers: 10000,
    monthlyStoppers: 3000,
    contributors: [
      {
        id: "1",
        fullname: 'Gallois Clément',
        stoppers: 1000,
        monthlyStoppers: 500
      },
      {
        id: "2",
        fullname: 'Delvaux Loïc',
        stoppers: 700,
        monthlyStoppers: 50
      },
      {
        id: "3",
        fullname: 'Stref Ninon',
        stoppers: 600,
        monthlyStoppers: 50
      },
      {
        id: "4",
        fullname: 'Perchet Manaëlle',
        stoppers: 500,
        monthlyStoppers: 300
      },
      {
        id: "5",
        fullname: 'Sacré Christopher',
        stoppers: 200,
        monthlyStoppers: 200
      }
    ],
    firstPlace: "1",
    secondPlace: "2",
    thirdPlace: "3",
    monthlyFirstPlace: "1",
    monthlySecondPlace: "4",
    monthlyThirdPlace: "5"
  },
  mutations: {

  },
  actions: {

  }
})
