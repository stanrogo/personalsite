<template>
    <div id="filters">
        <div class="filter-column is-collapsed">
            <h3>Filter By Tag</h3>

            <fieldset class="filter-section">
                <label class="filter-label" v-for="filter in filterNames">
                    <input class="filter-checkbox js-tag-checkbox" name="tag-checkbox" type="checkbox" >
                    {{filter}}
                </label>
            </fieldset>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'filters',
        data () {
            return {
                filterNames: [
                    'StudyPortals',
                    'Sleep',
                    'Conferences',
                    'Web Development',
                    'Testing',
                    'Experimental',
                    'Travel'
                ]
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    @import '../styles/general';

    #filters{
        @include flex(0 0 200px);
        margin-right: 2rem;

        .filter-label{
            display: block;
        }
    }
</style>
