const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

const isProduction = process.env.NODE_ENV === 'production';
const mode = isProduction ? 'production' : 'development';

module.exports = {
	mode,
	output: {
		path: path.join(process.cwd(), 'public', 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(scss|css)$/,
				loader: [
					"vue-style-loader",
					"css-loader",
					"sass-loader"
				]
			}
		]
	},
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js',
		},
	},
	plugins: [
		new VueLoaderPlugin(),
	]
};
