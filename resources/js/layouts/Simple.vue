<template>
<div>
  <b-container>
      <b-row class="justify-content-md-center">
        <b-col col md="4">
          <h1>NC</h1>
        </b-col>
      </b-row>
      <b-row class="justify-content-md-center">
          <b-col col md="8">
              <router-view></router-view>
          </b-col>
      </b-row>
  </b-container>
</div>
</template>

<script>
export default {

  name: 'Simple',

  data () {
    return {

    }
  },
  components: {
  }
}
</script>

<style lang="css" scoped>
</style>