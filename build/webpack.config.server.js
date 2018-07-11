const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

module.exports = webpackMerge(baseConfig, {
	entry: [
		'./src/entry-server.js',
	],
	target: 'node',
	output: {
		libraryTarget: 'commonjs2'
	},
	plugins: [
		new VueSSRServerPlugin(),
	],
});
