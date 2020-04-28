
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');


let Myheader = require('./components/Myheader.vue');
let Myfooter = require('./components/Myfooter.vue');

const app = new Vue({
    el: '#app',
    components:{
        Myheader, Myfooter
    }
});
