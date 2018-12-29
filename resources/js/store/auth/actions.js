
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
  },  

  get_client({commit}){
    //initialize api public posts
    const dsteem = require("dsteem");
    //client public don't have information of client only use for public datas
    var client=new dsteem.Client("https://api.steemit.com");
    if(client){
      console.log(client)
      commit("set_client",client)
    }
  },

}