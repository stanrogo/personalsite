<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div id="filters">
        <div class="filter-column is-collapsed">
            <fieldset class="filter-section">
                {{sharedState.counter}}
                <h3 class="filter-title">Filter By Tag</h3>

                <div class="filter-toggle-link" v-on:click="filtersOpen = !filtersOpen">{{filterSelectionText}}</div>

                <label class="filter-label" v-for="(isChecked, filterName) in filterStatus" :class="{'hidden':!filtersOpen}">
                    <input class="filter-checkbox js-tag-checkbox" name="tag-checkbox"
                           type="checkbox" v-on:change="filterChanged(filterName)">
                    {{filterName}}
                </label>
            </fieldset>
        </div>
    </div>
</template>

<script>

    import stateStore from './stateStore.js';

    export default {
        name: 'filters',
        data(){
            return {
                defaultFilterText: 'Select a tag',
                filterSelectionText: 'Select a tag',
                filtersOpen: false,
                filterStatus: {
                    'StudyPortals': false,
                    'Sleep': false,
                    'Conferences': false,
                    'Web Development': false,
                    'Testing': false,
                    'Experimental': false,
                    'Travel': false
                },
                sharedState: stateStore.state
            }
        },
        methods: {
            filterChanged: function(filterName){

                this.filterStatus[filterName] = ! this.filterStatus[filterName];

                const selectedFilters = [];

                for (const filterName in this.filterStatus){

                    if(!this.filterStatus.hasOwnProperty(filterName)){

                        return;
                    }

                    if(this.filterStatus[filterName] === true){

                        selectedFilters.push(filterName);
                    }
                }

                if(selectedFilters.length == 0){

                    this.filterSelectionText = this.defaultFilterText;
                }
                else{

                    this.filterSelectionText = selectedFilters.join(', ');
                }

                this.sharedState.activeFilters = selectedFilters;
                this.sharedState.bus.$emit('filtersUpdated')
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
