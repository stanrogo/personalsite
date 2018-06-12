import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './pages/Home.vue';
import Post from './pages/Post.vue';

const routes = [
    { path: '/', component: Home, name: 'Home' },
    { path: '/articles/:postID', component: Post, name: 'Post' },
];

const router = new VueRouter({
    routes,
    scrollBehavior: function(to) {
        if (to.hash) {
            return {selector: to.hash}
        } else {
            return { x: 0, y: 0 }
        }
    },
});

Vue.use(VueRouter);

export default router;
