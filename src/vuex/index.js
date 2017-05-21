import Vue from 'vue';
import Vuex from 'vuex';

import post from './store/post.js';
import ui from './store/ui.js';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        post,
        ui
    }
});

const VuexStore = {

    install(Vue) {
        Vue.mixin({
            data(){
                return {
                    vuexStore: store
                }
            }
        });
    }
};

export default VuexStore;