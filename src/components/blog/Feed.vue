<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div id="feed">
            <div class="material-card clearfix"  v-for="post in filteredPosts">
                <h1>{{post.name}}</h1>
                <p class="post-summary">{{post.summary}}</p>
                <span class="fontawesome-user quick-fact">Stanley Clark</span>
                <span class="fontawesome-calendar quick-fact">{{post.date}}</span>
                <span class="fontawesome-tag quick-fact" v-for="tag in post.tags">{{tag}}</span>

                <button class="button button--block font--white" v-on:click="goToPost(post.htmlTitle)">Read more</button>
            </div>
    </div>
</template>

<script>

    import store from '../../vuex/index.js';

    export default {
        name: 'feed',
        computed: {
            filteredPosts: function(){

                return store.state.post.filteredPosts;
            }
        },
        methods:{
            goToPost: function(postID){

                const currPath = this.$router.currentRoute.path;
                const goPath = currPath + '/' + postID

                console.log(goPath);

                this.$router.push(goPath);
            }
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import '../../styles/general';

    #feed{
        @include flex(1);

        .material-card{
            margin-top: 2rem;
        }

        .button{
            margin-top: 1rem;
            float: right;
        }

        .quick-fact{
            margin-right: 1rem;

            &:before{
                margin-right: 0.3rem;
            }
        }
    }
</style>
