<template>
    <div id="blog">
        <div class="grid-container blog-section-container">
            <feed></feed>
            <filters></filters>
        </div>
    </div>
</template>

<script>
    import Filters from './Filters.vue';
    import Feed from './Feed.vue';

    import store from '../../vuex/index.js';

    export default {
        name: 'blog',
        components: {Filters, Feed},
        created(){

            store.dispatch('FETCH_LIST');
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    @import '../../styles/general';

    #blog{
        .blog-section-container{
            @include flex-direction(column-reverse);

            @include breakpoint(laptop){
                @include flex-direction(row);
            }
        }
    }
</style>
