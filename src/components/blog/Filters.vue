<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div id="filters">
        <div class="filter-column is-collapsed">
            <fieldset class="filter-section">
                <h3 class="filter-title">Filter By Tag</h3>

                <div class="filter-toggle-link" v-on:click="filtersOpen = !filtersOpen">{{filterSelectionText}}</div>

                <label class="filter-label" v-for="filterName in filterList" :class="{'hidden':!filtersOpen}">
                    <input class="filter-checkbox js-tag-checkbox" name="tag-checkbox"
                           type="checkbox" v-on:change="filterChanged($event.target, filterName)">
                    {{filterName}}
                </label>
            </fieldset>
        </div>
    </div>
</template>

<script>

    import store from '../../vuex/index.js';

    export default {
        name: 'filters',
        data(){
            return {
                defaultFilterText: 'Select a tag',
                filterSelectionText: 'Select a tag',
                filtersOpen: false
            }
        },
        computed: {
            filterList () {

                return store.state.post.categories;
            }
        },
        methods: {
            filterChanged: function(checkbox, filterName){

                if(checkbox.checked === false){

                    store.dispatch('REMOVE_FILTER', filterName);
                }
                else{

                    store.dispatch('ADD_FILTER', filterName);
                }
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    @import '../../styles/general';

    #filters{
        width: 100%;
        margin-top: 2rem;

        @include breakpoint(laptop){
            width: 200px;
            margin: 2rem 0 0 2rem;
        }

        .filter-title{
            margin: 0 0 0.5rem 0;
        }

        .filter-toggle-link{
            margin-bottom: 0.25rem;
            color: #0063cc;
            cursor: pointer;

            &:hover{
                text-decoration: underline;
            }
        }

        .filter-label{
            @include flexbox();
        }
    }
</style>
