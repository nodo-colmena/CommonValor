<template>
  <div>
    <b-container class="bv-example-row">
      <b-card v-show="this.status_img" class="card" v-on:click="charge_post">
        <b-row>
          <b-col sm="12" class="headers">
            <div>
              <b-img width="20" height="20" :src="this.image"/>
              <a>{{post.author}}</a>
              <a>{{reputacion}}</a>
              <a>en {{tag}}</a>
              <a>{{this.format_date}}</a>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="3">
            <div>
              <b-img class="imag_post" thumbnail fluid :src="post.image" alt="Image"/>
            </div>
          </b-col>
          <b-col sm="9">
            <div>
              <h5>{{post.title}}</h5>
              <p class="card-text">
                <!-- TODO:change THIS -->
                This card has supporting text below as a natural lead-in
                to additional content.
              </p>
            </div>
            <b-row>
              <ul class="foott">
                <li class="foott">
                  <a>{{post.pending_payout_value}}</a>
                </li>
                <!-- -->
                <li class="foott">
                  <a>{{post.net_votes}}</a>
                </li>
                <li class="foott">
                  <a>{{post.children}}</a>
                </li>
                <li class="foott">
                  <a>reesteemeado</a>
                  <b-button class="vote_button" v-on:click="vote_post">Vote</b-button>
                </li>
              </ul>
            </b-row>
          </b-col>
        </b-row>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "card_view_item",

  data() {
    return {
      image: null,
      format_date: null,
      reputacion: 0,
      status_img: false,
    };
  },

  props: {
    post: {
      type: Object,
      required: true
    },
    tag: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      client: "auth/client",
      user: "auth/user",
      api: "auth/api"
      //author: "posts/author_information"
    })
  },
  methods: {
    ...mapActions({
      get_selected_post: "posts/get_selected_post",
      set_vote: "posts/vote_post",
      get_client: "auth/get_client",
      get_author_info: "posts/get_author_info"
    }),

    charge_post() {
      //cargar detalle de post y creacion de url personalizada
      //this.$router.push({path:'/post',params:{'url':'url'}})
      const p = this.post;
      this.$router.push({ path: "/post/" + p.permlink });
      this.get_selected_post(p);
      //console.log(this.post_selected)
      //TODO: Pass reputation, Image author with PROPS to post_details Component
    },

    date_format() {
      //TODO: ADD Moments.js to date format
      //Use post.created this parameter have the date
      const moment = require('moment');
      const date = moment(this.post.created).fromNow();
      this.format_date = date;
      console.log(this.format_date)
    },

    vote_post() {
      this.set_vote({
        user: this.user,
        client: this.client,
        api: this.api,
        post: this.post
      });
    },

    async bringAuthorDatas() {
      const accSearch = this.post.author;
      const max = 1;
      const autor = await this.client.database.call("get_accounts", [
        [accSearch]
      ]);
      const json = JSON.parse(autor[0].json_metadata);
      this.image = json.profile.profile_image;
      if(this.image != null){
        this.status_img = true;
      }
      console.log("Imagen:", this.image);
      this.reputacion = autor[0].reputation;
      console.log(this.reputacion);
    }
  },
  mounted(){
    this.date_format();
  },
  created() {
    //request to public client
    this.get_client();
    this.bringAuthorDatas();
  }
};
</script>

<style lang="scss">
.foott {
  display: inline-block;
  margin-top: 10px;
  /* You can also add some margins here to make it look prettier */
  zoom: 1;
  *display: inline;
  padding-right: 30px;
  margin-bottom: 0px;
  /* this fix is needed for IE7- */
}

.imag_post {
  padding-block-start: 5px;
  width: 100%;
  height: auto;
  max-height: 125px;
  display: inline-block;
  vertical-align: middle;
  border: none;
  overflow: hidden;
}

.card {
  margin-top: 20px;
}

.headers {
  padding-block-end: 10px;
}
</style>

///props
