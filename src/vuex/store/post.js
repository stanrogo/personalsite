import req from 'reqwest';

export default {
    state: {
        list: [],
        categories: [],
        filteredPosts: [],
        activeFilters: []
    },
    mutations: {
        /**
         * Set the posts stored in this state
         *
         * @param state
         * @param newList - the new (complete) list of items that are available for the user
         */
        POST_LIST_UPDATE_ALL(state, newList){

            state.list = newList
        },
        POST_LIST_FILTER(state){

            if(state.activeFilters.length == 0){

                state.filteredPosts = state.list;
                return;
            }

            const filteredPosts = [];
            const activeIDs = [];

            state.list.forEach(post => {

                state.activeFilters.forEach(filterName => {

                    if(post.tags.includes(filterName) && !activeIDs.includes(post.id)){

                        filteredPosts.push(post);
                        activeIDs.push(post.id);
                    }
                })
            });

            state.filteredPosts = filteredPosts;
        },
        /**
         * Get the categories available to filter on based on the tags stored in the list of posts
         *
         * @param state
         */
        POST_FILTER_CATEGORIES(state){

            let categories = [];

            state.list.forEach((item) => {

                item.tags.forEach((tag) => {

                    let duplicated = categories.indexOf(tag);
                    if(duplicated === -1) categories.push(tag);
                });
            });

            state.categories = categories
        },
        REMOVE_FILTER(state, filterName){

            const filterIndex = state.activeFilters.indexOf(filterName);
            state.activeFilters.splice(filterIndex, 1);
        },
        ADD_FILTER (state, filterName){

            state.activeFilters.push(filterName);
        }
    },
    actions: {
        /**
         * Fetch the list of posts that we have from the lists.json document
         *
         * @param commit
         */
        FETCH_LIST({commit}){

            let url = window.location.origin + "/API/lists.json";

            if('caches' in window) {

                caches.match(url).then(function (res) {

                    if(res) {

                        console.log('THERE\'S CACHES!');

                        res.json().then(function (json) {

                            commit('POST_LIST_UPDATE_ALL', json);
                            commit('POST_FILTER_CATEGORIES');
                            commit('POST_LIST_FILTER');
                        })
                    }
                })
            }

            req('./API/lists.json', (res) => {

                commit('POST_LIST_UPDATE_ALL', res);
                commit('POST_FILTER_CATEGORIES');
                commit('POST_LIST_FILTER');
            });
        },
        REMOVE_FILTER ({state, commit}, filterName){

            commit('REMOVE_FILTER', filterName);
            commit('POST_LIST_FILTER');
        },
        ADD_FILTER ({state, commit}, filterName){

            commit('ADD_FILTER', filterName);
            commit('POST_LIST_FILTER');
        }
    }
}