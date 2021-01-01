import { createStore } from "vuex";

export default createStore({
  state: {
    active: 'dashboard'
  },
  mutations: {
    SET_ACTIVE_NAV(state, navElement) {
      state.active = navElement;
    }
  },
  actions: {
    set_active_nav({ commit }, navElement) {
      commit('SET_ACTIVE_NAV', navElement)
    }
  },
  modules: {}
});
