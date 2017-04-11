import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import WebFont from 'webfontloader';

import App from './components/App.vue'
import Home from './components/home/Home.vue'
import Work from './components/work/Work.vue'
import Blog from './components/blog/Blog.vue'
import Post from './components/blog/Post.vue'

import store from './vuex/index.js';

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
    {
        path: '/',
        component: Home,
        name: 'Home'
    },
    {
        path: '/work',
        component: Work,
        name: 'Work'
    },
    {
        path: '/blog',
        component: Blog,
        name: 'Blog'
    },
    {
        path: '/blog/:htmlTitle',
        component: Post
    }
];

const router = new VueRouter({
    routes
});

router.afterEach(() => {

    window.scrollTo(0, 0);
});

router.beforeEach((to, from, next) => {

    console.log(to.name);
    store.commit('STORE_ROUTE', to);
    next();
});

const vue = new Vue({
    el: '#app',
    render: h => h(App),
    router
});

WebFont.load({
    google: {
        families: ['Cormorant Garamond']
    },
    custom: {
        families: ['FontAwesome'],
        urls: ['https://use.fontawesome.com/405bb302d1.css']
    }
});