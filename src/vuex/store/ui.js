export default {
    state: {
        sidebarOpen: false,
        currentRouteName: ''
    },
    mutations: {
        TOGGLE_SIDEBAR (state, toClose = false) {

            if(toClose === true){

                state.sidebarOpen = false;
                return;
            }

            state.sidebarOpen = !state.sidebarOpen
        },
        STORE_ROUTE (state, route) {

            state.currentRouteName = route.name;
        }
    }
}
