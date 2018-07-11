/**
 * @file main.js
 * @description Main platform independent vue file
 * @author Stanley Clark <me@stanrogo.com>
 * @version 1.0.0
 */

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue';
import AsyncComputed from 'vue-async-computed'
import VueMarkdown from 'vue-markdown';
import Moment from 'vue-moment';
import VueDisqus from 'vue-disqus';
import Contentful from './plugins/contentful';

import createRouter from './router/routes';
import createStore from './store/store';
import { sync } from 'vuex-router-sync'

Vue.config.productionTip = false;

Vue.use(AsyncComputed);
Vue.use(VueMarkdown);
Vue.use(BootstrapVue);
Vue.use(Contentful);
Vue.use(Moment);
Vue.use(VueDisqus);

function createApp(){
	const router = createRouter();
	const store = createStore();

	// Sync so that route state is available as part of the store
	sync(store, router);

	const app = new Vue({
		render: h => h(App),
		router,
		store,
	});

	return { app, router, store };
}

export default createApp;
