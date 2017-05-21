<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div id="feed">
        <section class="material-card post-container"  v-for="post in filteredPosts">
            <div class="post-heading">
                <h1>{{post.name}}</h1>
                <span class="fa-calendar quick-fact">Posted on {{post.date}}</span>
                <span class="fa-tag quick-fact" v-for="tag in post.tags">{{tag}}</span>
            </div>
            <figure class="card-figure">
                <img class="card-image" v-if="post.imageURL" :src="imgUrl(post.imageURL)">
            </figure>
            <p class="post-summary">{{post.summary}}</p>
            <button class="button button--read-more" v-on:click="goToPost(post.htmlTitle)">Read more</button>
        </section>
    </div>
</template>

<script>

    import store from '../../vuex/index.js';
    import variables from '../variables.js';

    export default {
        name: 'feed',
        computed: {
            filteredPosts: function(){

                const posts = store.state.post.filteredPosts;

                posts.forEach(post => {

                    if(typeof post.summary === "object"){

                        post.summary = post.summary.join("");
                    }
                });


                return posts;
            }
        },
        methods:{
            goToPost: function(postID){

                const currPath = this.$router.currentRoute.path;
                const goPath = currPath + '/' + postID;

                this.$router.push(goPath);
            },
            imgUrl: function(image){

                return variables.imageBaseURLStripped + image;
            }
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import '../../styles/general';

    #feed{
        @include flex(1);

        .post-container{
            @include flexbox();
            @include flex-direction(column);
            @include justify-content(center);
            margin: 1rem 0;

            @include breakpoint(tablet){
                margin: 2rem 0;
            }
        }

        .post-heading{
            padding: 0 0 1rem;
            text-align: center;
        }

        .button--read-more{
            display: block;
            margin: 0 auto;
            background-color: $color--accent;
            color: $color--white;
        }

        .quick-fact{
            display: inline-block;
            margin-right: 1rem;
            text-transform: uppercase;
            line-height: 1.5;

            &:before{
                margin-right: 0.3rem;
            }
        }

        .card-figure{
            position: relative;
            height: 150px;
            margin: 0 -1rem;
            padding: 0;
            overflow: hidden;

            @include breakpoint(tablet){
                margin: 0 -2rem;
                height: 200px;
            }

            .card-image{
                @include position-center();
            }
        }
    }
</style>
