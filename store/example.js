/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint no-param-reassign: ["off"] */
/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

import axios from 'axios';

// initial state
export const state = () => ({
  items: [],
});

// getters
export const getters = {
  getItems: state => state.items,
};

// actions
export const actions = {
  /*
  ** Get all items from MongoDB with GET request to endpoint /api/item
  ** then commit mutation GET_ITEMS
  */
  getItemsFromApi({ commit }) {
    axios.get(`${process.env.apiRoot}/item`).then((response) => {
      commit('GET_ITEMS', response.data);
    });
  },
  /*
  ** Add item to MongoDB with POST request to endpoint /api/item
  ** then commit mutation ADD_ITEM
  ** @param {object} item
  */
  addItem({ commit }, item) {
    axios.post(`${process.env.apiRoot}/item`, item).then((response) => {
      commit('ADD_ITEM', response.data);
    });
  },
  /*
  ** Update item in MogoDB with PUT request to ednpoint /api/item
  ** then commit mutation UPDATE_ITEM
  ** @param {object} item
  */
  updateItem({ commit }, item) {
    axios.put(`${process.env.apiRoot}/item`, item).then((response) => {
      console.log(response.data);
      commit('UPDATE_ITEM', response.data);
    }).catch((error) => {
      console.log(error.response);
    });
  },
  /*
  ** Delete item from MongoDB with DELETE request to endpoint /api/item
  ** then commit mutation REMOVE_ITEM
  ** @param {string} id of item
  */
  deleteItem({ commit }, id) {
    axios.delete(`${process.env.apiRoot}/item`, { params: { id } }).then(() => {
      commit('REMOVE_ITEM', id);
    }).catch((error) => {
      console.log(error.response);
    });
  },
};

// mutations
export const mutations = {
  /*
  ** Store all items into the state
  */
  GET_ITEMS(state, items) {
    state.items = items;
  },
  /*
  ** Update item and update it in state collection
  */
  UPDATE_ITEM(state, input) {
    const index = state.items.findIndex(item => item._id === input._id);
    state.items.splice(index, 1, input);
  },
  /*
  ** Store new item into the state
  */
  ADD_ITEM(state, item) {
    state.items.push(item);
  },
  /*
  ** Remove item by id from state
  */
  REMOVE_ITEM(state, id) {
    const index = state.items.findIndex(item => item._id === id);
    state.items.splice(index, 1);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
