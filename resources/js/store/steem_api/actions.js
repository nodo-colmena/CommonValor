
export default {
  
  initializeAPI({ commit }) {
    const sc2 = require('sc2-sdk');
    let api = sc2.Initialize({
      app: 'nctest',
      callbackURL: 'http://commonvalor.org.test/#/Login',
      accessToken: 'access_token',
      scope: ['vote', 'comment'],
    })
    commit("initialize_api", api);
  }
}
//http://commonvalor.org.test/?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYXBwIiwicHJveHkiOiJuY3Rlc3QiLCJ1c2VyIjoiY3RpLWJ1YXAiLCJzY29wZSI6WyJ2b3RlIiwiY29tbWVudCJdLCJpYXQiOjE1NDQ0MDgzMjIsImV4cCI6MTU0NTAxMzEyMn0.EhY5hhhfMPfn3T1o2Gl6GvKwdH6iFTRL3Bm07huqR8Y&expires_in=604800&username=cti-buap#/login