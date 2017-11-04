/**
 * We create some vue components for handling the portfolio interaction
 */

import Vue from 'vue';

const store = {
    state:{
        selectedItem: null
    },
    setSelectedItem(newValue){

        this.state.selectedItem = newValue;
    },
    getSelectedItem(){
        return this.state.selectedItem;
    }
};

Vue.component('portfolio-item', {
    props: ['portfolioItem'],
    template: `
        <section class="PortfolioCard" v-on:click="updateSelectedItem()" v-if="!this.$root.$data.selectedItem">
            <img class="PortfolioImage" :src="portfolioItem.imageUrl">
            <div class="overlay"></div>
            <div class="TextContainer Hexagon">
                <h1 class="PortfolioItemText">
                    {{portfolioItem.title}}
                </h1>
                <h2 class="PortfolioItemText">{{portfolioItem.type}}</h2>
            </div>
        </section>
    `,
    methods: {
        updateSelectedItem: function(){

            const selected = store.getSelectedItem();

            if(selected && selected.title === this.portfolioItem.title){

                // We clicked twice, so close instead

                store.setSelectedItem(null);
                return;
            }

            store.setSelectedItem(this.portfolioItem);
        }
    }
});

Vue.component('portfolio-spotlight', {
    props: ['portfolioItems'],
    template: `
        <div id="PortfolioSpotlight" v-if="this.$root.$data.selectedItem">
            <button class="button" v-on:click="clearSelection">
                <span class="lnr lnr-arrow-left ArrowLeft"></span>Back
            </button>
            <section class="PortfolioSpotlight">
                <img class="PortfolioImage" :src="this.$root.$data.selectedItem.imageUrl">
                <div class="PortfolioSpotlightTextContent">
                    <h1 class="PortfolioSpotlightHeading">
                        {{this.$root.$data.selectedItem.title}} -
                        {{this.$root.$data.selectedItem.type}}    
                    </h1>
                    <div v-html="this.$root.$data.selectedItem.description"></div>
                </div>
                <hr>
            </section>
        </div>
    `,
    methods: {
        clearSelection: function(){

            store.setSelectedItem(null);
        }
    }
});

new Vue({
    el: '#Portfolio',
    data: store.state
});

