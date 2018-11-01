import Vue from 'vue';

if (process.server) {
    // Use full compiled version for ssr
    Vue.use(require('bootstrap-vue'));
  } else {
    // Include only what you need for client
    // Note that you need to get .default from required module
    Vue.component('b-navbar', require('bootstrap-vue/es/components/navbar/navbar').default);
    Vue.component('b-navbar-brand', require('bootstrap-vue/es/components/navbar/navbar-brand').default);
    Vue.component('b-navbar-toggle', require('bootstrap-vue/es/components/navbar/navbar-toggle').default);
    Vue.component('b-navbar-nav', require('bootstrap-vue/es/components/navbar/navbar-nav').default);
    Vue.component('b-nav-item', require('bootstrap-vue/es/components/nav/nav-item').default);
    Vue.component('b-collapse', require('bootstrap-vue/es/components/collapse/collapse').default);
  }
