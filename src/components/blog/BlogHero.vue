<template>
    <div id="blog-hero">
        <img class="hero-image" :src="imgUrl('bloghero_a5equg.jpg')">
        <h1 class="hero-title">The Journal</h1>
    </div>
</template>

<script>

    import variables from '../variables.js';

    export default {
        name: 'blog-hero',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        methods:{
            imgUrl(path) {
                return variables.imageBaseURL5 + path
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    @import '../../styles/general';

    #blog-hero{
        @include flexbox();
        @include flex-direction(column);
        @include align-items(center);
        @include justify-content(center);
        height: $hero-height;
        background-color: $color--grey-medium;

        .hero-image{
            width: 200px;
            border-radius: 100px;
        }

        .hero-title{
            color: $color--white;
        }
    }

</style>
