import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city:'',
    weather:''
  },
  getters:{
    NAME: state => {
      return state.city;
    },
    WEATHER: state =>{
      return state.weather;
    }
  },
  mutations: {
    SET_CITY: (state, payload) =>{
      state.city = payload;
    },
    SET_WEATHER: (state, payload) =>{
      state.weather = payload;
    }
  },
  actions: {
    
  },
  modules: {
  }
})
