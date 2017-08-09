/* eslint no-shadow: ["error", { "allow": ["state", "products"] }] */
/* eslint no-param-reassign: ["off"] */
import axios from 'axios';

export const state = () => ({
  actualWeek: {},
});

export const mutations = {
  receiveActualWeek(state, week) {
    state.actualWeek = week;
  },
};

export const getters = {
  getActualWeek: state => state.actualWeek,
};

export const actions = {
  getActualWeek({ commit }, options) {
    axios.get(`api/week/${options.year}/${options.number}`).then((response) => {
      if (response.data) {
        commit('receiveActualWeek', response.data);
      } else {
        axios.post('api/week', options).then((week) => {
          commit('receiveActualWeek', week.data);
        });
      }
    });
  },
  saveActualWeek({ commit }, options) {
    axios.post('api/week/update', options);
  },
};
