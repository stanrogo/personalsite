import Vuex from 'vuex';

const createStore = () => {
	return new Vuex.Store({
		state: () => ({
			navItems: [
				{
					name: 'Home',
					to: '/',
					exact: true,
				},
				{
					name: 'Work',
					to: '/work/',
					exact: false,
					items: [],
				},
				{
					name: 'Projects',
					to: '/project/s',
					exact: false,
					items: [],
				},
				{
					name: 'Blog',
					to: '/blog/',
					exact: false,
				},
				{
					name: 'About',
					to: '/about/',
					exact: true,
				},
			],
			contactLinks: [
				{
					link: 'https://twitter.com/stanrogo',
					name: 'Twitter',
				},
				{
					link: 'https://nl.linkedin.com/in/stanleyclark',
					name: 'LinkedIn',
				},
				{
					link: 'https://github.com/stanrogo',
					name: 'GitHub',
				},
				{
					link: 'mailto:me@stanrogo.com?Subject=Hey%20Stanley%20!%20I%20was%20looking%20for%20me%20information',
					name: 'Email',
				},
				{
					link: 'tel:+31647051992',
					name: 'Phone',
				},
			],
		}),
		mutations: {
			setNavItems(state, data) {
				const itemIndex = state.navItems.findIndex(x => x.name === data.name);
				state.navItems[itemIndex].items = data.items;
			},
		},
	});
};

export default createStore;
