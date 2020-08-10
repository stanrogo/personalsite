module.exports = {
	/*
    ** Headers of the page
    */
	head: {
		htmlAttrs: {
			lang: 'en',
		},
		title: 'StanRogo - Stanley Clark - PhD Student Database Access Control',
		meta: [
			{charset: 'utf-8',},
			{name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no',},
			{
				hid: 'description',
				name: 'description',
				content: 'Thoughts, events and other things from a computer science PhD student in Eindhoven.',
			},
		],
		link: [
			{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico',},
			{rel: 'manifest', href: '/manifest.json',},
			{rel: 'preconnect', href: 'https://cdn.contentful.com',},
			{rel: 'preconnect', href: 'https://ajax.googleapis.com',},
			{rel: 'stylesheet', href: '/fonts/linearicons.min.css', media: 'all'},
		],
	},
	modules: [
		[
			'@nuxtjs/google-analytics', {
				id: 'UA-68184328-3',
			},
		],
		'bootstrap-vue/nuxt',
		'@nuxtjs/markdownit',
	],
	buildModules: [
		'@nuxtjs/dotenv',
		'@nuxtjs/moment',
	],
	bootstrapVue: {
		components: [
			'BNavbar',
			'BNavbarBrand',
			'BNavbarToggle',
			'BNavbarNav',
			'BNavItemDropdown',
			'BDropdownItem',
			'BNavItem',
			'BCollapse',
		],
	},
	markdownit: {
		preset: 'default',
		linkify: true,
		breaks: true,
		injected: true,
	},
	router: {
		linkActiveClass: 'active',
	},
	/*
    ** Define registered plugins
    */
	plugins: [
		'~/plugins/contentful',
	],
	/*
    ** Customize the progress bar color
    */
	loading: {color: '#3B8070',},
	render: {
		bundleRenderer: {
			shouldPreload: (file, type) => {
				return ['script', 'style', 'font',].includes(type);
			},
		},
	},
	build: {
		/**
		 * Extend the given webpack configuration
		 * @param config The webpack configuration
		 * @param isDev Is development environment
		 * @param isClient Is code being packed for the client
		 */
		extend(config, {isDev, isClient,}) {
			//  Run ESLint on save
			if (isDev && isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/,
				});
			}
		},
	},
};
