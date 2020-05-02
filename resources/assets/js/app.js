
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

require('./bootstrap');

window.Vue = require('vue');


let Myheader = require('./components/Myheader.vue');
let Myfooter = require('./components/Myfooter.vue');

let Home = require('./components/home.vue');
let About = require('./components/about.vue');

// vue routes
const routes = [
  { path: '/home', component: Home },
  { path: '/about', component: About }
]
const router = new VueRouter({
    // mode: 'history',

  routes // short for `routes: routes`
})

const app = new Vue({
    el: '#app',
    router,
    components:{
        Myheader, Myfooter
    }
});
