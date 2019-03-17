import Vue from "vue";

export default {
  login({ commit }, user) {
    commit("set_user", user);
    Vue.router.push({
      name: "landpage"
    });
  },

  logout({ commit }, api) {
    api.revokeToken(function (err, res) {
      if (res) {
        console.log('unset' + Object.values(res))
        commit("unset_user")
      }
    });
  },

  get_client({ commit }) {
    //initialize api public posts
    const dsteem = require("dsteem");
    //client public don't have information of client only use for public datas
    var client = new dsteem.Client("https://api.steemit.com");
    if (client) {
      //console.log(client)
      commit("set_client", client);
    }
  },

  initializeAPI({ commit }) {
    const sc2 = require("sc2-sdk");
    let api = sc2.Initialize({
      baseURL: "https://steemconnect.com",
      app: "nctest",
      callbackURL: "http://commonvalor.org.test/#/Login",
      accessToken: "access_token",
      scope: ["vote", "comment"]
    });
    commit("initialize_api", api);
  },

  get_me({ commit }, api) {
    api.me(function (err, res) {
      commit('me_data', res)
    })
  }


};

//http://commonvalor.org.test/?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYXBwIiwicHJveHkiOiJuY3Rlc3QiLCJ1c2VyIjoiY3RpLWJ1YXAiLCJzY29wZSI6WyJ2b3RlIiwiY29tbWVudCJdLCJpYXQiOjE1NDQ0MDgzMjIsImV4cCI6MTU0NTAxMzEyMn0.EhY5hhhfMPfn3T1o2Gl6GvKwdH6iFTRL3Bm07huqR8Y&expires_in=604800&username=cti-buap#/login
