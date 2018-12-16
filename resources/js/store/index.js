import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


import account from "./account"
import auth from "./auth"
import exchange from "./exchange"
import posts from "./posts"
import steem_api from "./steem_api"

export default new Vuex.Store({
    modules: {
        account,
        auth,
        exchange,
        posts,
        steem_api
    }
});
