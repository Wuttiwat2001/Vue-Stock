import api from "@/service/api";
import { server } from "@/service/constants";

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
    restoreLogin({ commit }) {
      if (api.isLoggedIn() === true) {
        const username = localStorage.getItem(server.USERNAME);
        commit("SET_LOGGED_IN");
        commit("SET_USERNAME", username);
      }
    },
    async doLogin({ commit, dispatch }, { username, password }) {
      const result = await api.login({ username, password });
      if (result === true) {
        commit("SET_LOGGED_IN");
        commit("SET_USERNAME", username);
      } else {
        dispatch("doLogout", {});
      }
    },
    doLogout({ commit }) {
      api.logoff();
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
