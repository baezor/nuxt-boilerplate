/* eslint no-shadow: ["error", { "allow": ["state", "products"] }] */
/* eslint no-param-reassign: ["off"] */
import axios from 'axios';

export const state = () => ({
  list: [],
});

export const mutations = {
  recieveTasks(state, items) {
    state.list.push(items);
  },
};

export const getters = {
  getAll: state => state.list,
};

export const actions = {
  getAllTasks({ commit }) {
    axios.get('api/tasks').then((response) => {
      commit('recieveTasks', response.data);
    });
  },
};
