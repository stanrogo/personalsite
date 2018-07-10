import * as Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		activePortfolioItem: 0,
	},
	mutations: {
		changeActivePortfolioItem (state, id) {
			state.activePortfolioItem = id;
		},
	},
	getters: {
		activePortfolioItem(state){
			return state.activePortfolioItem;
		},
	},
});

export default store;