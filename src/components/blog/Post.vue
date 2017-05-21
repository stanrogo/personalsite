<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <article id="post">
        <div class="cover-wrapper">
            <img class="cover" v-if="post.imageURL" :src="constructImageUrl(post.imageURL)">
            <div class="cover--overlay" v-if="post.imageURL"></div>
            <div class="cover--title">
                <h1>{{post.name}}</h1>
                <h2>By Stanley Clark</h2>
            </div>
        </div>
        <button class="fa-arrow-left button" v-on:click="goBack">Back</button>

        <div class="post-content grid-container">


            <div v-html="post.htmlContent"></div>
        </div>
    </article>
</template>

<script>

    import store from '../../vuex/index.js';

    export default {
        name: 'post',
        computed: {
            post: function(){

                const post = store.state.post.current;

                if(typeof post.htmlContent === "object"){

                    post.htmlContent = post.htmlContent.join("");
                }

                return post;
            }
        },
        methods: {
            goBack: function(){

                this.navigateBack ? this.$router.go(-1) : this.$router.replace('/blog');
            }
        },
        beforeRouteEnter: (to, from, next) => {

            let navigateBack = true;

            if(from.path === '/'){

                // We have probably come from an external source

                navigateBack = false;
            }

            store.dispatch('FETCH_LIST', to.params.htmlTitle);
            next(vm => {

                vm.navigateBack = navigateBack;
            });
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import '../../styles/general';

    #post{
        position: relative;

        // resets

        ul{
            list-style-type:disc;
            margin-left: 1rem;
        }

        .cover-wrapper{
            position: relative;
            height: 300px;
            overflow: hidden;
            background-color: $color--grey-light;

            @include breakpoint(tablet){
                height: $hero-height;
            }

            .cover{
                max-width: none;
                @include position-center();

                @include breakpoint(tablet){
                    min-width: 1920px;
                }
            }

            .cover--overlay{
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgba($color--text-primary, 0.8);
            }

            .cover--title{
                @include borderbox();
                @include flexbox();
                @include flex-direction(column);
                @include align-items(center);
                @include position-center();
                color: $color--white;
                text-transform: uppercase;
                width: 100%;
                padding: 1rem;
                text-align: center;
            }
        }

        .button {
            position: absolute;
            padding: 0.5rem 1rem;
            top: 0;

            &:before {
                padding-right: 0.5rem;
            }
        }

        .grid-container{
            @include flex-direction(column);
        }

        .lead-letter{
            float: left;
            font-size: 3rem;
            padding-right: 1rem;
        }
    }
</style>
