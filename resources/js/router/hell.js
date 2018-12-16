import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(Router)

export default new VueRoter({
  routes: [
    {
        path: '/home',
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
      component: Posts
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      redirect: '/home',
    },  
    {
      path: '/*',
      redirect: '/home',
    },
  ]
})