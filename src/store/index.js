import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { counter: 0 },
  getters: {
    getCounter: function (state) {
      return state.counter;
    },
  },
  mutations: {
    addCounter: function (state, payload) {
      return state.counter++;
    },
    subCounter: function (state, payload) {
      return state.counter--;
    },
  },
  actions: {
    addCounter({ commit }) {
      setTimeout(() => {
        commit("addCounter");
      }, 3000);
    },
  },
  modules: {},
});
