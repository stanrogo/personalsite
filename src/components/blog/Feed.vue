<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div id="feed">
        <section class="featured-post">
            <figure class="card-figure">
                <img class="card-image" v-if="featuredPost.imageURL" :src="constructImageUrl(featuredPost.imageURL)">
                <div class="overlay"></div>
            </figure>
            <div class="featured-post--heading">
                <h2 class="featured-article-text">Featured Article</h2>
                <h1 class="featured-article-name">{{featuredPost.name}}</h1>
                <button class="button button--read-more" v-on:click="goToPost(featuredPost.htmlTitle)">Read more</button>
            </div>
        </section>

        <div class="grid-container">
            <section class="post-container"  v-for="post in filteredPosts" v-on:click="goToPost(post.htmlTitle)">
                <div class="material-card">
                    <figure class="card-figure">
                        <img class="card-image" v-if="post.imageURL" :src="constructImageUrl(post.imageURL)">
                    </figure>
                    <div class="post-heading">
                        <div class="quick-fact">{{post.date}}</div>
                        <div class="quick-fact">
                            <div class="tag" v-for="tag in post.tags">{{tag}}</div>
                        </div>
                        <h1>{{post.name}}</h1>
                    </div>
                </div>
            </section>
        </div>



    </div>
</template>

<script>

    export default {
        name: 'feed',
        computed: {
            featuredPost: function(){

                if(this.vuexStore.state.post.filteredPosts.length > 0){

                    return this.vuexStore.state.post.filteredPosts[0];
                }
                else{

                    return {};
                }
            },
            filteredPosts: function(){

                let posts = this.vuexStore.state.post.filteredPosts;
                posts = posts.slice(1);

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
            }
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import '../../styles/general';

    #feed{

        .featured-post{
            position: relative;

            .featured-post--heading{
                @include position-center();
                color: $color--white;
                text-align: center;

                .featured-article-text{
                    font-size: 1rem;
                }

                .featured-article-name{
                    text-transform: uppercase;
                    font-size: 2rem;
                }
            }

            .card-figure{
                height: 400px;

                .card-image{
                    width: 200%;

                    @include breakpoint(tablet){
                        width: calc(100% + 4rem);
                    }
                }
            }

            .overlay{
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                background-color: rgba(0, 0, 0, 0.7);
            }
        }

        .grid-container{
            @include justify-content(space-around);
            @include flex-direction(column);

            @include breakpoint(tablet){
                @include flex-direction(row);
            }
        }


        .post-container{
            @include flex(1);
            margin: 1rem 0;
            padding: 1rem;

            @include breakpoint(tablet){
                margin: 2rem 0;
            }

            .material-card{
                @include flexbox();
                @include flex-direction(column);
                padding: 0;
                border-radius: 0 0 5px 5px;
                overflow: hidden;
                background-color: $color--grey-light;
                transition: 0.3s background-color ease;

                &:hover{
                    cursor: pointer;
                    background-color: $color--white;
                }
            }
        }

        .post-heading{
            padding: 1rem;
            text-align: center;
        }

        .button--read-more{
            display: block;
            margin: 0 auto;
            background-color: $color--accent;
            color: $color--white;
        }

        .quick-fact{
            display: block;
            line-height: 1.5;

           .tag{
               display: inline;
           }
        }

        .card-figure{
            position: relative;
            height: 150px;
            width: 100%;
            margin: 0;
            padding: 0;
            overflow: hidden;

            @include breakpoint(tablet){
                height: 200px;
            }

            .card-image{
                @include position-center();
            }
        }
    }
</style>
