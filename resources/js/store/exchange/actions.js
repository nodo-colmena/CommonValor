export default{
  inputSteem({commit}, arg) {
      commit("set_cSteem", arg)
  },
  inputFaircoin({commit}, arg) {
      commit("set_cFaircoin", arg)
  },
  inputDirW({commit}, arg) {
      commit("set_dir_wallet", arg)
  },
  inputType({commit}, arg) {
      commit("set_steem_type", arg)
  },
}