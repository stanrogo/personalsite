export default {
    state: {
        sidebarOpen: false
    },
    mutations: {
        TOGGLE_SIDEBAR (state) {

            state.sidebarOpen = !state.sidebarOpen
        }
    },
    actions: {
        TOGGLE_SIDEBAR({state, commit}){

            commit('TOGGLE_SIDEBAR');
        }
    }
}
