// Import Vue dependencies

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// Import 3rd party dependencies

import WebFont from 'webfontloader';

// Import the Vuex Store

import store from './vuex/index.js';

// Import the main application file

import App from './components/App.vue'

// Import top level route modules as async components (for packaging as separate bundles)

const Home = resolve => {
    require.ensure(['./components/home/Home.vue'], () => {
        resolve(require('./components/home/Home.vue'))
    })
};

const Work = resolve => {
    require.ensure(['./components/work/Work.vue'], () => {
        resolve(require('./components/work/Work.vue'))
    })
};

const Blog = resolve => {
    require.ensure(['./components/blog/Blog.vue'], () => {
        resolve(require('./components/blog/Blog.vue'))
    })
};

const Post = resolve => {
    require.ensure(['./components/blog/Post.vue'], () => {
        resolve(require('./components/blog/Post.vue'))
    })
};

// Bootstrap our application

Vue.use(VueRouter);
Vue.use(VueResource);

// Define the routes we want to take and inject them

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
        component: Post,
        name: 'Blog'
    }
];

const router = new VueRouter({
    routes
});

router.afterEach(() => {

    window.scrollTo(0, 0);
});

router.beforeEach((to, from, next) => {

    store.commit('STORE_ROUTE', to);
    next();
});

const vue = new Vue({
    el: '#app',
    render: h => h(App),
    router
});

// Load web fonts in a non-blocking way

WebFont.load({
    google: {
        families: ['Cormorant Garamond']
    },
    custom: {
        families: ['FontAwesome'],
        urls: ['https://use.fontawesome.com/405bb302d1.css']
    }
});