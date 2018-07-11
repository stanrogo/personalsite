const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

module.exports = webpackMerge(baseConfig, {
	entry: [
		'./src/entry-client.js',
	],
	plugins: [
		new VueSSRClientPlugin()
	],
});

