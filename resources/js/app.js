import Vue from 'vue';
import App from './App.vue'  //importar app.vue componente main 



require('./bootstrap');
import BootstrapVue from "bootstrap-vue"; //importacion de directivas bootstrap-vue
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue)
/*
Usar Bootstrap con Vue.js es  complicado, debido a la gran dependencia de los 
componentes dinámicos de Bootstrap en jQuery. 

Bootstrap-Vue no solo es compatible con los componentes y el sistema de cuadrícula 
de Bootstrap, sino que también incluye la compatibilidad con las Directivas Vue.js , 
que nos brinda el conjunto completo de características del ecosistema Vue.js.
Ademas de que sus componentes son rederizados mas rapido que los de bootstrap normal

mas info: https://medium.com/@BjornKrols/integrating-and-customising-bootstrap-4-in-vue-js-cbc29ba7688e

*/ 
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

import Vuex from 'vuex';
Vue.use(Vuex);
import store from './store'

/*
//////////////////Router
import router from "./router"
Vue.router = router; //Necesaria para injectar Router dentro de instancia Vue
Vue.use(router)
////////////////////////////////
*/

////////////////////////////////////////////
import VueRouter from "vue-router";
Vue.use(VueRouter)

import LandPage from './pages/LandPage/Index.vue'
import AboutUs from './pages/AboutUs/Index.vue'
import Exchange from './pages/Exchange/Index.vue'
import Investors from './pages/Investors/Index.vue'
import Login from './pages/Login/Index.vue'
import Posts from './pages/Posts/Index.vue'
import new_post from './pages/Posts/new_post.vue'
import profile from './pages/profile/index.vue'
import post_details from './pages/Posts/post_details.vue'

//declaracion de vector routes necesario para router
const routes = [
     { path:'/LandPage',component:LandPage, name:'landpage'},
     { path:'/AboutUs',component:AboutUs },
     { path:'/Exchange',component:Exchange },
     { path:'/Investors',component: Investors },
     { path:'/Login',component: Login, meta: { layout: 'simple' }, name: 'login',
    props: (route) => ({ access_token: route.query.access_token,
                         expires_in: route.query.expires_in,
                         username: route.query.username  }) },
     { path: '/Posts', component: Posts, meta: { layout: 'no-flexbox' }  },
     { path: '/newPost', component:new_post,meta:{layout:'no-flexbox'} },
     { path: '/panel_usr', component:profile,meta:{layout:'no-flexbox'} },
     { path: '/post/:url', component: post_details, name: 'post_details', meta: { layout: 'default' } },
     { path: '/',redirect: '/LandPage' },
     { path: '/*', redirect: '/LandPage' },
     
   ]
  
const router = new VueRouter({
  //mode:'history',
  routes // short for `routes: routes`
})

Vue.router=router;
////////////////////////////////////////////


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