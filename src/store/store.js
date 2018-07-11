import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default () =>{
	return new Vuex.Store({
		state: {
			activePortfolioItem: 0,
		},
		mutations: {
			changeActivePortfolioItem(state, id){
				state.activePortfolioItem = id;
			},
		},
		getters: {
			activePortfolioItem(state){
				return state.activePortfolioItem;
			},
		},
	});
};
