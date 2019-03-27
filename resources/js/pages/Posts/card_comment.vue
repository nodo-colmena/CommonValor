<template>
<div class="c_card">
    <img class="avatar" thumbnail fluid :src="c_picture">
        <div class="infos">
          <div class="name capitalize">
            {{ comment.author }}
          </div>
            <div class="card-body">
             <div class="image-w-text" v-html="body_comment"></div>
            </div>      
        </div>
</div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
name: "card_comment",
data() {
    return {
        body_comment: "",
        c_picture: "",
        c_author: "",
        c_username: "",
        c_backgr: "",
        reputacion: 0,
        status_img: false,
    }
},
props: {
    comment: {
        type: Object,
        required: true
    },
},
computed: {
    ...mapGetters({
        client: "auth/client",
    })
},
methods: {
    get_body_comments() {
        const Remarkable = require("remarkable"); //Convert json to markdown
        const md = new Remarkable({ html: true, linkify: true });
        this.body_comment = md.render(this.comment.body);
        console.log("COMMENT" + this.comment.body);
    },
    async bringAuthorDatas() {
        const accSearch = this.comment.author;
        const max = 1;
        const autor = await this.client.database.call("get_accounts", [
        [accSearch]
        ]);
        const json = JSON.parse(autor[0].json_metadata);
        this.c_picture = json.profile.profile_image;
        if(this.c_picture != null){
          this.status_img = true;
        }
        console.log("Imagen comentarios:", this.c_picture);
        this.reputacion = autor[0].reputation;
        console.log(this.reputacion);
    },
},

created(){
    this.get_body_comments();
    this.bringAuthorDatas();
}

};

</script>

<style lang="scss">

$global_gap: 10px;
$shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
$shadow_hover: 0 6px 10px rgba(0,0,0,0.16), 0 6px 10px rgba(0,0,0,0.23);
.c_card {
    width: 470px;
    min-height: 185px;
    display: flex;
    padding: $global_gap;
    border-radius: 5px;
    box-shadow: $shadow;
    background: rgba(255, 255, 255, .8);
    margin: 25px 0 0 0;
.avatar {
    width: 100px;
    height: 100px;
    margin-right: $global_gap;
    border-radius: 50%;
    //box-shadow: $shadow;
    //border: 4px solid rgba(255, 255, 255, .5);
}

.infos {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;

div {

    &:not(:last-child) {
    margin-bottom: $global_gap;
    
    &.capitalize {
    text-transform: capitalize;
    }

    &.name {
    font-size: 150%;
            font-weight: bold;
    }

    i {
    margin-right: $global_gap;
    }
    }
    }
}
}
</style>
