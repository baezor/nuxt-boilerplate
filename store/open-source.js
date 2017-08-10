/* eslint no-shadow: ["error", { "allow": ["state", "products"] }] */
/* eslint no-param-reassign: ["off"] */
import axios from 'axios';

export const state = () => ({
  openSource: [],
});

export const mutations = {
  storeAllOpenSourceProjects(state, projects) {
    state.openSource = projects;
  },
};

export const getters = {
  getAllOpenSourceProjects: state => state.openSource,
};

export const actions = {
  getAllOpenSourceProjects({ commit }) {
    axios.get('/api/open-source').then((response) => {
      if (response.data) {
        commit('storeAllOpenSourceProjects', response.data);
      }
    });
  },
};
