
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import AsyncComputed from 'vue-async-computed'
import VueMarkdown from 'vue-markdown';
import BootstrapVue from 'bootstrap-vue'
import Moment from 'vue-moment';

import Contentful from './plugins/contentful';

import Home from './Home.vue';
import Work from './Work.vue';
import Portfolio from './Portfolio.vue';
import Blog from './Blog.vue';
import Post from './Post.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

const routes = [
    { path: '/', component: Home, name: 'Home' },
    { path: '/work', component: Work , name: 'Work' },
    { path: '/portfolio', component: Portfolio, name: 'Portfolio' },
    { path: '/blog', component: Blog, name: 'Blog' },
    { path: '/blog/:postID', component: Post, name: 'Post' },
];

const router = new VueRouter({
    routes,
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
