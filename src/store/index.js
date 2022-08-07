import { createStore } from "vuex";

// Create a new store instance.
export default createStore({
  state: {
    element: 0,
  },
  mutations: {
    changeElement(state, value) {
      state.element = value;
    },
  },
  getters: {
    getElement(state) {
      return state.element;
    },
  },
});
