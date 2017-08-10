/* eslint no-shadow: ["error", { "allow": ["state", "products"] }] */
/* eslint no-param-reassign: ["off"] */
import axios from 'axios';

export const state = () => ({
  cases: [],
});

export const mutations = {
  storeAllCases(state, cases) {
    state.cases = cases;
  },
};

export const getters = {
  getAllCases: state => state.cases,
};

export const actions = {
  getAllCases({ commit }) {
    axios.get('/api/cases').then((response) => {
      if (response.data) {
        commit('storeAllCases', response.data);
      }
    });
  },
};
