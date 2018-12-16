import Vue from 'vue';
require('./bootstrap');
import App from './App.vue'  //importar app.vue componente main 

import VueRouter from 'vue-router' //importar vue router
Vue.use(VueRouter)  // usar vue router

import BootstrapVue from "bootstrap-vue" //importacion de directivas bootstrap-vue
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
Vue.use(BootstrapVue)

import Vuex from 'vuex';
Vue.use(Vuex);
import store from './store'

/*
Why use bootstrap-vue and no bootstrap v4^^?

Some Bootstrap 4 functions require jQuery, Popper.js, 
and these functions will conflict with Vue. (These functions 
modify the DOM directly. Vue won't keep track of these modifications. 
Any changes made using jQuery could be overwritten by Vue.)

These functions include:
Affix
Alert
Button
Carousel
Collapse
Dropdown
Modal
Popover
Scrollspy
Tab
Tooltip
Bootstrap-vue converted most of these functions into Vue, so that it works 
as expected.
*/

window.Vue = require('vue');

//importacion de archivos para routes
import LandPage from './pages/LandPage/Index.vue'
import AboutUs from './pages/AboutUs/Index.vue'
import Exchange from './pages/Exchange/Index.vue'
import Investors from './pages/Investors/Index.vue'
import Login from './pages/Login/Index.vue'
import Posts from './pages/Posts/Index.vue'
import new_post from './pages/Posts/new_post.vue'
import profile from './pages/profile/index.vue'

//declaracion de vector routes necesario para router
const routes = [
     { path: '/LandPage', component: LandPage, name: 'landpage' },
     { path: '/AboutUs', component: AboutUs },
     { path: '/Exchange', component: Exchange },
     { path: '/Investors', component: Investors },
     { path: '/Login', component: Login, meta: { layout: 'simple' }, name: 'login',
    props: (route) => ({ access_token: route.query.access_token,
                         expires_in: route.query.expires_in,
                         username: route.query.username  }) },
     { path: '/Posts', component: Posts, meta: { layout: 'no-flexbox' }  },
     { path: '/newPost', component:new_post,meta:{layout:'no-flexbox'} },
     { path: '/panel_usr', component:profile,meta:{layout:'no-flexbox'} },
     { path: '/', redirect: '/LandPage' },
     { path: '/*', redirect: '/LandPage' },
   ]

const router = new VueRouter({
  routes     
})


Vue.router = router; //Necesaria para injectar Router dentro de instancia Vue


new Vue({           //se renderizara primero el componente con el nombre App
    el: '#app',
    router,                    
    store,
    render: h => h(App)
}) 


/* * 
La respuesta (para cualquier otra persona que se encuentre con esto), es que render: h => h(App)es una abreviatura de:

render :  function ( createElement ) {
     return  createElement (App);
}
Que se puede acortar a:

render ( createElement ) {
     return  createElement (App);
}
Lo que nuevamente se puede acortar a (con hser un alias createElementcomo se indicó anteriormente):

render ( h ) {
     return  h (App);
}
Que luego se acorta más (usando la sintaxis de la "flecha gruesa" de ES6):

render :  h  =>  h (App);
Como lo señaló Evan en la respuesta de este número , el significado hviene de hiperscript:
*/