import { createStore } from "vuex";

// Create a new store instance.
export default createStore({
  state: {
    element: 1,
  },
  mutations: {
    changeElement(value) {
      this.state.element = value;
    },
  },
  getters: {
    getElement(state) {
      return state.element;
    },
  },
});
