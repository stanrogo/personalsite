/**
 * @file entry-server.js
 * @description Server specific entry file
 * @author Stanley Clark <me@stanrogo.com>
 * @version 1.0.0
 */

import createApp from './main';

export default (context) => {
	return new Promise((resolve, reject) => {
		const { app, router, store } = createApp();

		// Set server-side router's location
		router.push(context.url);

		// Wait until router has resolved possible async components and hooks
		router.onReady(() => {
			const matchedComponents = router.getMatchedComponents();
			// No matched routes, reject with 404
			if (!matchedComponents.length) {
				return reject({ code: 404 })
			}

			context.state = store.state;

			// The Promise should resolve to the app instance so it can be rendered
			resolve(app)
		}, reject);
	})
}
