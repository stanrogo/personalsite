module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/recommended',
	],
	// required to lint *.vue files
	plugins: [
		'vue',
	],
	rules: {
		'semi': [2, 'always'],
		'indent': ['error', 'tab'],
		'comma-dangle': ['error', {
			'arrays': 'always',
			'objects': 'always',
			'imports': 'never',
			'exports': 'never',
			'functions': 'ignore'
		}],
		'quotes': ['error', 'single'],
		'no-console': 'off',
		'vue/max-attributes-per-line': 'off',
		'vue/html-indent': ['error', 'tab'],
		'vue/no-v-html': 'off',
	}
};
