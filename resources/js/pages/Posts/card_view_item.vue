<template>
    <div>
        <b-card class="card">
            <b-container class="bv-example-row">
                <b-row>
                    <b-col sm="12" class="headers">
                        <div>
                            <b-img blank width="20" height="20" blank-color="#777" class="m-1" />
                            <a> {{post.author}}</a>
                            <a>(90)</a>
                            <a> en {{tag}} </a>
                            <a>   {{post.created}}</a>
                        </div>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col sm="3">
                        <div>
                            <b-img class="imag_post" thumbnail fluid :src="post.image" alt="Image" />
                        </div>
                    </b-col>
                    <b-col sm="9">
                        <div>
                            <h5>{{post.title}}</h5>
                            <!--<strong>{{ post_item.title}}</strong>  -->
                            <p class="card-text">
                                This card has supporting text below as a natural lead-in
                                to additional content.
                            </p>
                        </div>
                        <b-row>
                            <ul class="foott">
                                <li class="foott"> <a>{{post.pending_payout_value}}</a>        </li>  <!-- -->
                                <li class="foott"> <a>{{post.net_votes}}</a>          </li>
                                <li class="foott"> <a>{{post.children}}</a>          </li>
                                <li class="foott"> <a>reesteemeado</a> </li>
                            </ul>
                        </b-row>
                    </b-col>
                </b-row>
            </b-container>
        </b-card>
    </div>
</template>

<script>

    export default{
        name:'card_view_item',

        props:{
            post: {
                type: Object,
                required: true
            },
            tag:{
                type:String,
                required: true
            }
        }
    }
</script>

<style lang="scss">
.foott {
        display: inline-block;
        margin-top: 10px;
        /* You can also add some margins here to make it look prettier */
        zoom:1;
        *display:inline;
        padding-right: 30px;
        margin-bottom: 0px;
        /* this fix is needed for IE7- */
    }

    .imag_post{
        padding-block-start: 5px;
        width:100%;
        height:auto;
        max-height: 125px;
        display: inline-block;
        vertical-align: middle;
        border :none;
        overflow:hidden;
    }

    .card{
        margin-top: 20px;
    }

    .headers{
        padding-block-end: 10px;
    }

</style>

///props