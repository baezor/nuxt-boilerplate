/* eslint no-shadow: ["error", { "allow": ["state", "products"] }] */
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
  ** Get all items from MongoDB with GET request to endpoint /api/items
  ** then commit mutation ADD_ITEMS
  */
  getItemsFromApi({ commit }) {
    axios.get('/api/items').then((response) => {
      commit('ADD_ITEMS', response.data);
    });
  },
  /*
  ** Add item to MongoDB with POST request to endpoint /api/item
  ** then commit mutation ADD_ITEM
  ** @param {object} item
  */
  addItem({ commit }, item) {
    axios.post('/api/item', item).then((response) => {
      commit('ADD_ITEM', response.data);
    });
  },
  /*
  ** Delete item from MongoDB with DELETE request to endpoint /api/item
  ** then commit mutation REMOVE_ITEM
  ** @param {string} id of item
  */
  deleteItem({ commit }, id) {
    axios.delete('/api/item', { params: { id } }).then(() => {
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
  ADD_ITEMS(state, items) {
    state.items = items;
  },
  /*
  ** Store new item into the state
  */
  ADD_ITEM(state, item) {
    state.items.push(item);
  },
  /*
  ** Remove item by id frome state
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
