export default {
  namespaced: true,
  state: () => ({
    isLogged: false,
    username: "",
  }),
  mutations: {
    SET_LOGGED_IN(state) {
      state.isLogged = true;
    },
    SET_LOGGED_OUT(state) {
      state.isLogged = false;
    },
    SET_USERNAME(state, payload) {
      state.username = payload;
    },
  },
  actions: {
    async doLogin({ commit, dispatch }, payload) {
      const result = true;
      // const result = await api.login({ username, password });
      if (result === true) {
        commit("SET_LOGGED_IN");
        commit("SET_USERNAME", payload.username);
      } else {
        dispatch("doLogout", {});
      }
    },
    doLogout({ commit }) {
      // api.logoff();
      commit("SET_LOGGED_OUT");
      commit("SET_USERNAME", "");
    },
  },
  getters: {
    isLogin(state) {
      return state.isLogged;
    },
    username(state) {
      return state.username;
    },
  },
};
