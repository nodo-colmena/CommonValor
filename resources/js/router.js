//importacion de archivos para routes
import LandPage from './pages/LandPage/Index.vue'
import AboutUs from './pages/AboutUs/Index.vue'
import Exchange from './pages/Exchange/Index.vue'
import Investors from './pages/Investors/Index.vue'
import Login from './pages/Login/Index.vue'
import Posts from './pages/Posts/Index.vue'
import new_post from './pages/Posts/new_post.vue'
import profile from './pages/profile/index.vue'
import post_details from './pages/Posts/post_details.vue'

import Vue from 'vue';
import Router from "vue-router";

Vue.use(Router)
export default new Router({
  //mode:"history", don't work :C
  routes:[
    {
      path: '/landpage',
      name: 'LandPage',
      component: LandPage
    },
    {
      path: '/aboutus',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/exchange',
      name: 'Exchange',
      component: Exchange
    },
    {
      path: '/investors',
      name: 'Investors',
      component: Investors
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts,
      meta:{ layout: 'no-flexbox' }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { layout: 'simple' },
      props: (route) => ({ access_token: route.query.access_token,
        expires_in: route.query.expires_in,
        username: route.query.username  })
    },
    { path: '/newPost', 
      component:new_post,
      meta:{layout:'no-flexbox'} 
    },
    { 
      path: '/panel_usr', 
      component:profile,
      meta:{layout:'no-flexbox'} 
    },
    { 
      path: '/post/:url', 
      component: post_details, 
      name: 'post_details', 
      meta: { layout: 'default' } 
    },
    {
      path: '/',
      redirect: '/home',
    },  
    {
      path: '/*',
      redirect: '/home',
    },
  ],
});