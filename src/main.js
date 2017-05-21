// Import Vue dependencies

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueFire from 'vuefire';

import store from './vuex/index.js';

// Import the main application file

import App from './components/App.vue'

// Import internal custom dependencies

import Cloudinary from './cloudinary.js';
import FireBaseHelper from './firebaseHelper.js';
import routes from './routes.js';

// Bootstrap our application

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueFire);
Vue.use(Cloudinary);
Vue.use(FireBaseHelper);

const router = new VueRouter({routes});
router.afterEach(() => {

    window.scrollTo(0, 0);
});
router.beforeEach((to, from, next) => {

    store.commit('STORE_ROUTE', to);
    next();
});

new Vue({
    el: '#app',
    render: h => h(App),
    router
});