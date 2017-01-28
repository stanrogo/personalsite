export default {
    state: {
        sidebarOpen: false
    },
    mutations: {
        TOGGLE_SIDEBAR (state, toClose = false) {

            console.log(toClose);

            if(toClose === true){

                state.sidebarOpen = false;
                return;
            }

            state.sidebarOpen = !state.sidebarOpen
        }
    }
}
