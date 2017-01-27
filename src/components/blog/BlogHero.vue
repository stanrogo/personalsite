<template>
    <div id="blog-hero">
        <img class="hero-image" src="../../images/bloghero.jpg">
        <h1 class="hero-title">The Journal</h1>
    </div>
</template>

<script>
    export default {
        name: 'blog-hero',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
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
