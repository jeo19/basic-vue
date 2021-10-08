import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { counter: 0, books: [] },
  getters: {
    getCounter: function (state) {
      return state.counter;
    },
    availableBooks() {},
  },
  mutations: {
    addCounter: function (state, payload) {
      return state.counter++;
    },
    subCounter: function (state, payload) {
      return state.counter--;
    },
    setBook() {},
  },
  actions: {
    addCounter({ commit }) {
      setTimeout(() => {
        commit("addCounter");
      }, 3000);
    },
    fetchBooks() {},
  },
  modules: {},
});
