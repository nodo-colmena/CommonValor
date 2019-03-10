export default {
  user: (state, getters) => state.user,
  client: (state, getters) => state.client,
  loginURL: (state, getters) => state.loginURL,
  client_data: (state, getters) => state.user.meData,
  api: (state, getters) => state.api,
};