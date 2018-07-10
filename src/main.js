import Vue from 'vue';

import BootstrapVue from 'bootstrap-vue'

import App from './App.vue';

import AsyncComputed from 'vue-async-computed'
import VueMarkdown from 'vue-markdown';

import Moment from 'vue-moment';
import VueDisqus from 'vue-disqus';

import Contentful from './plugins/contentful';

import router from './routes';
import store from './store';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

Vue.use(AsyncComputed);
Vue.use(VueMarkdown);
Vue.use(BootstrapVue);
Vue.use(Contentful);
Vue.use(Moment);
Vue.use(VueDisqus);

/* eslint-disable no-new */
new Vue({
	el: '#app',
	components: { App },
    template: '<App/>',
    router,
	store,
});
