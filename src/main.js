
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import AsyncComputed from 'vue-async-computed'
import VueMarkdown from 'vue-markdown';
import BootstrapVue from 'bootstrap-vue'
import Moment from 'vue-moment';

import Contentful from './plugins/contentful';

import Home from './pages/Home.vue';
import Post from './pages/Post.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

const routes = [
    { path: '/', component: Home, name: 'Home' },
    { path: '/articles/:postID', component: Post, name: 'Post' },
];

const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior: function(to, from, savedPosition) {
        if (to.hash) {
            return {selector: to.hash}
        } else {
            return { x: 0, y: 0 }
        }
    },
});

Vue.use(VueRouter);
Vue.use(AsyncComputed);
Vue.use(VueMarkdown);
Vue.use(BootstrapVue);
Vue.use(Contentful);
Vue.use(Moment);

/* eslint-disable no-new */
new Vue({
	el: '#app',
	components: { App },
    template: '<App/>',
    router, 
});
