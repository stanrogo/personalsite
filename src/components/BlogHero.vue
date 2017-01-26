<template>
    <div id="blog-hero">
        <img class="hero-image" src="../assets/bloghero.jpg">
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
    @import '../styles/general';

    #blog-hero{
        padding: 2rem 0 2rem;
        height: $hero-height;
        background-color: $color--grey-medium;

        .hero-image{
            display: block;
            margin: 0 auto;
            width: 50%;
            border-radius: 50%;

            @include breakpoint('tablet'){
                width: 15%;
            }
        }

        .hero-title{
            color: $color--white;
            text-align: center;
        }
    }

</style>
