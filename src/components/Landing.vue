

<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">

    <header id="landing">
        <h1 class="hero-title"><strong>STANLEY CLARK</strong></h1>
        <h2 class="hero-subtitle">Front end developer and student, Eindhoven</h2>
        <img class="profile-image" :src="imgUrl('v1485706163/me_z8wlij.jpg')" alt="Picture of Stanley Clark">

        <ul>
            <li class="header-link" v-for="link in links">
                <a class="social-icon" target="_blank" :href="link.href">{{link.name}}</a>
            </li>
        </ul>
    </header>

</template>

<script>
    import variables from './variables.js';

    export default {
        name: 'landing',
        data () {
            return {
                links: [
                    {name: 'LinkedIn', href: 'https://www.linkedin.com/in/stanleyclark'},
                    {name: 'Twitter', href: 'https://www.twitter.com/stanrogo'},
                    {name: 'Email', href: 'mailto:me@stanrogo.com?Subject=I%20Want%20To%20Ask%20You%20Something!'}
                ]
            }
        },
        methods: {
            imgUrl: function(image){

                return variables.imageBaseURLStripped + image;
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">

    @import '../styles/general';

    #landing{
        @include flexbox();
        @include flex-direction(column);
        @include justify-content(center);
        @include align-items(center);
        height: 90vh;
        text-align: center;

        .profile-image{
            width: 150px;
            margin: 0 auto 2rem;
            display: block;
            border-radius: 50%;

            @include breakpoint(phablet){
                width: 200px;
            }
        }

        .hero-title{
            margin-bottom: 0;
        }

        .hero-subtitle{
            margin-top: 0;
        }

        .header-link{
            display: block;
            padding: 1rem 0;

            @include breakpoint(tablet){
                display: inline-block;
                padding: 0 2rem;
            }
        }
    }

    #landing ~ #footer{
        position: fixed;
        bottom: 0;
        left: 3rem;
        right: 0;

        @include breakpoint(tablet){
            left: 300px;
        }
    }

</style>