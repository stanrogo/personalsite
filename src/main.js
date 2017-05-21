/**
 * The main entry point into the application where bootstrapping is done
 *
 * @author Stanley Clark
 * @version 1.0.0
 */

// Import Vue specific dependencies

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueFire from 'vuefire';

// Import the main application file

import App from './components/App.vue'

// Import internal custom dependencies

import Cloudinary from './cloudinary.js';
import FireBaseHelper from './firebaseHelper.js';
import VuexStore, {store} from './vuex/index.js';
import routes from './routes.js';

// Use all Vue plugins

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueFire);
Vue.use(Cloudinary);
Vue.use(FireBaseHelper);
Vue.use(VuexStore);

// Setup the router with some custom behaviour

const router = new VueRouter({routes});
router.afterEach(() => {
    window.scrollTo(0, 0);
});
router.beforeEach((to, from, next) => {
    store.commit('STORE_ROUTE', to);
    next();
});

// Run the application

new Vue({
    el: '#app',
    render: h => h(App),
    router
});