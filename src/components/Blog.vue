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

    export default {
        name: 'blog',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components: {Filters, Feed, BlogHero}
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    @import '../styles/general';


</style>
