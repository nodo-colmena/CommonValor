
export default {
  initialize_api(state, api){
      state.api = api
      state.loginURL = api.getLoginURL()
  }
}