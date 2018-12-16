
import Vue from 'vue';



export default {
    login({commit}, user) {
        commit("set_user", user);
        Vue.router.push({
          name: 'landpage'
        });
    },
    logout({commit}) {
        commit("unset_user")
        Vue.router.push('landpage');
    }
}