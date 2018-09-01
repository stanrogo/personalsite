import Vuex from 'vuex';

const createStore = () => {
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
}

export default createStore;
