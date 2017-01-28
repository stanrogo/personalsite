import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './components/App.vue'
import Home from './components/home/Home.vue'
import Work from './components/work/Work.vue'
import Blog from './components/blog/Blog.vue'
import Post from './components/blog/Post.vue'

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/work',
        component: Work
    },
    {
        path: '/blog',
        component: Blog
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

new Vue({
    el: '#app',
    render: h => h(App),
    router
});
