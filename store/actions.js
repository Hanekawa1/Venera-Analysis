export default {
  tryTeste({ commit }) {
    commit('TESTE');
  },
  setID({ commit }, id) {
    commit('SET_ID', id);
  },
  setSource({ commit }, source) {
    commit('SET_SOURCE', source);
  },
};
