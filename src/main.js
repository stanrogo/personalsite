import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import Home from './components/Home.vue'
import Work from './components/Work.vue'
import Blog from './components/Blog.vue'

Vue.use(VueRouter);

const routes = [
    {path: '/', component: Home},
    {path: '/work', component: Work},
    {path: '/blog', component: Blog}
];

const router = new VueRouter({
    routes
});

new Vue({
    el: '#app',
    render: h => h(App),
    router
});
