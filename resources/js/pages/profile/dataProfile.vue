<template>
  <b-container grid-list-xs>
    <b-card
      overlay
      style="max-height:10rem"
      img-src="https://picsum.photos/900/150/?image=36"
      img-alt="Card Image"
      class="text-center"
      text-variant="white"
      :title="userInfo.name"
      sub-title="b"
    >
      <p class="card-text">Hello</p>
    </b-card>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "dataProfile",

  computed: {
    ...mapGetters({
      userInfo: "auth/client_data"
    })
  }
};
</script>


<style>
</style>
