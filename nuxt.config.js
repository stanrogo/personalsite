const createClient = require('contentful').createClient;
const config = {
	space: 'rb7ghqpklwc4',
	accessToken: '232b1ef6d09ece11d2fb8baeeb17e35cc317bdbf0aae6ef1c433b676af7ae8d4',
};

const client = createClient(config);

module.exports = {
	/*
    ** Headers of the page
    */
	head: {
		htmlAttrs: {
			lang: 'en',
		},
		title: 'StanRogo - Thoughts, Events and Other Things by Stanley Clark',
		meta: [
			{charset: 'utf-8',},
			{name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no',},
			{
				hid: 'description',
				name: 'description',
				content: 'Thoughts, events and other things from a computer science student in Eindhoven.',
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
		// Simple usage
		[
			'@nuxtjs/google-analytics', {
				id: 'UA-68184328-3',
			},
		],
		'bootstrap-vue/nuxt',
		'@nuxtjs/markdownit',
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
	/*
    ** Define registered plugins
    */
	plugins: [
		'~/plugins/contentful',
		'~/plugins/vue-disqus',
		'~/plugins/vue-moment',
		'~/plugins/highlight',
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
	/*
    ** Build configuration
    */
	build: {
		/*
        ** Run ESLint on save
        */
		extend(config, {isDev, isClient,}) {
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
	generate: {
		async routes() {
			const projects = await client.getEntries({ 'content_type': 'portfolio', });
			const jobs = await client.getEntries({ 'content_type': 'work', });
			const posts = await client.getEntries({ 'content_type': 'blogPost', });
			const mappedProjects = projects.items.map(x => `/projects/${x.fields.pageName}`);
			const mappedJobs = jobs.items.map(x => `/work/${x.fields.pageName}`);
			const mappedPosts = posts.items.map(x => `/blog/${x.fields.cleanUrl}`);
			return mappedJobs.concat(mappedProjects, mappedPosts);
		},
	},
};
