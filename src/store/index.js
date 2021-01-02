import { createStore } from "vuex";

export default createStore({
  state: {
    active: 'dashboard',
    nonsense: true,
  },
  mutations: {
    SET_ACTIVE_NAV(state, navElement) {
      state.active = navElement;
    },
    SET_NONSENSE(state) {
      state.nonsense = !state.nonsense
    }
  },
  actions: {
    set_active_nav({ commit }, navElement) {
      commit('SET_ACTIVE_NAV', navElement)
    },

    register_support_request({ commit }, supportRequest) {
      commit('SET_NONSENSE')
      console.log('supportRequest', supportRequest);
      
    }
  },
  modules: {}
});
