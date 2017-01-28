<template>
    <div id="blog">
        <blog-hero></blog-hero>
        <div class="grid-container">
            <feed></feed>
            <filters></filters>
        </div>
    </div>
</template>

<script>
    import Filters from './Filters.vue';
    import Feed from './Feed.vue';
    import BlogHero from './BlogHero.vue';

    import store from '../../vuex/index.js';

    export default {
        name: 'blog',
        components: {Filters, Feed, BlogHero},
        created(){

            store.dispatch('FETCH_LIST');
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    @import '../../styles/general';

    #blog{
        .grid-container{
            @include flex-direction(column-reverse);

            @include breakpoint(laptop){
                @include flex-direction(row);
            }
        }
    }
</style>
