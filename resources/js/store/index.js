import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


import auth from "./auth"
import exchange from "./exchange"
import posts from "./posts"

export default new Vuex.Store({
  modules: {
    auth,
    exchange,
    posts,
  }
});
