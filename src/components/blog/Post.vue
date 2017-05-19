<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <article id="post">
        <div class="cover-wrapper">
            <img class="cover" v-if="post.imageURL" :src="imgUrl(post.imageURL)">
        </div>
        <button class="fa-arrow-left button" v-on:click="goBack">Back</button>

        <div class="post-content grid-container">
            <h1>{{post.name}}</h1>

            <div v-html="post.htmlContent"></div>
        </div>
    </article>
</template>

<script>

    import store from '../../vuex/index.js';
    import variables from '../variables.js';

    export default {
        name: 'post',
        computed: {
            post: function(){

                return store.state.post.current;
            }
        },
        methods: {
            goBack: function(){

                this.navigateBack ? this.$router.go(-1) : this.$router.replace('/blog');
            },
            imgUrl: function(image){

                return variables.imageBaseURLStripped + 'c_crop,g_auto,h_500,w_1920,x_0,y_0/a_0/' + image;
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
            height: 150px;
            overflow: hidden;

            @include breakpoint(tablet){
                height: $hero-height;
            }

            .cover{
                width: 100%;
                @include position-center();

                @include breakpoint(tablet){
                    min-width: 1920px;
                }
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
