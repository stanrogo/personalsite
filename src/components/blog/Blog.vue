<template>
    <div id="blog">
        <feed></feed>
    </div>
</template>

<script>
    import Feed from './Feed.vue';

    export default {
        name: 'blog',
        components: {Feed},
        created: function(){

            this.vuexStore.dispatch('FETCH_LIST');
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    @import '../../styles/general';
</style>
