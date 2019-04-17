export default {
  user: (state, getters) => state.user,
  client: (state, getters) => state.client,
  loginURL: (state, getters) => state.loginURL,

  client_data: (state, getters) => {
    try {
      console.log('consulting medata')
      return state.user.meData

    } catch (error) {

    }
  },

  api: (state, getters) => state.api,
};