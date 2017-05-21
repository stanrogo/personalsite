// Import Vue dependencies

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueFire from 'vuefire';

// Import the main application file

import App from './components/App.vue'

// Import internal custom dependencies

import Cloudinary from './cloudinary.js';
import FireBaseHelper from './firebaseHelper.js';
import VuexStore from './vuex/index.js';
import routes from './routes.js';

// Bootstrap our application

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueFire);
Vue.use(Cloudinary);
Vue.use(FireBaseHelper);
Vue.use(VuexStore);

const router = new VueRouter({routes});
router.afterEach(() => {

    window.scrollTo(0, 0);
});
router.beforeEach((to, from, next) => {


    next();
});

new Vue({
    el: '#app',
    render: h => h(App),
    router
});