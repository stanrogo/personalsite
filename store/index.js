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
