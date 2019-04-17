<template>
  <div>
    <dataProfile v-if="userInfo!=null"></dataProfile>
    <tabs v-if="userInfo!=null"></tabs>
    <noLogin v-if="userInfo==null"></noLogin>
    <personalPostList v-if="userInfo!=null"></personalPostList>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import tabs from "./tabs.vue";
import dataProfile from "./dataProfile";
import noLogin from "./noLogin";
import personalPostList from "./personalPostList";

export default {
  components: {
    dataProfile,
    tabs,
    noLogin,
    personalPostList
  },

  methods: {
    ...mapActions({
      get_me: "auth/get_me"
    })
  },

  computed: {
    ...mapGetters({
      userInfo: "auth/client_data",
      apiCall: "auth/api"
    })
  },

  created() {
    this.get_me(this.apiCall); //obtiene datos de usuario logeado
  }
};
</script>

<style >
</style>
