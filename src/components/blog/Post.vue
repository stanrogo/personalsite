<template>
    <div id="post">
        Hey! This is your first post!
        {{post.name}}
    </div>
</template>

<script>

    import store from '../../vuex/index.js';

    export default {
        name: 'post',
        computed: {
            post: function(){

                console.log(store.state.post.current);

                return store.state.post.current;
            }
        },
        beforeRouteEnter: (to, from, next) => {

            store.dispatch('FETCH_LIST', to.params.htmlTitle);
            next();
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import '../../styles/general';

    #post{

    }
</style>
