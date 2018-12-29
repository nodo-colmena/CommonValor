import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


import auth from "./auth"
import exchange from "./exchange"
import posts from "./posts"
import steem_api from "./steem_api"

export default new Vuex.Store({
    modules: {
        auth,
        exchange,
        posts,
        steem_api
    }
});
