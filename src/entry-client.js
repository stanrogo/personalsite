/**
 * @file entry-client.js
 * @description Client specific entry file
 * @author Stanley Clark <me@stanrogo.com>
 * @version 1.0.0
 */

import createApp from './main';

const { app, store } = createApp();

if (window.__INITIAL_STATE__) {
	store.replaceState(window.__INITIAL_STATE__);
}

app.$mount('#app');
