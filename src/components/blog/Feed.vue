<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div id="feed">
        <section class="material-card grid-container post-container"  v-for="post in filteredPosts">
            <div class="post-heading">
                <span class="fa-user quick-fact">By Stanley Clark</span>
                <h1>{{post.name}}</h1>
                <span class="fa-calendar quick-fact">Posted on {{post.date}}</span>
                <span class="fa-tag quick-fact" v-for="tag in post.tags">{{tag}}</span>
            </div>
            <img class="card-image" :src="post.imageURL">
            <p class="post-summary">{{post.summary}}</p>
            <button class="button button--read-more" v-on:click="goToPost(post.htmlTitle)">Read more</button>
        </section>
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
                const goPath = currPath + '/' + postID;

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

        .post-container{
            @include flex-direction(column);
            @include justify-content(center);
        }

        .post-heading{
            padding: 0 1rem 2rem;
            text-align: center;
        }

        .button--read-more{
            display: block;
            margin: 0 auto;
            background-color: $color--accent;
            color: $color--white;
        }

        .quick-fact{
            margin-right: 1rem;
            text-transform: uppercase;

            &:before{
                margin-right: 0.3rem;
            }
        }
    }
</style>
