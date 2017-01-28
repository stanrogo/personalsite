<template>
    <div id="app">
        <nav-bar></nav-bar>
        <router-view></router-view>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import NavBar from './NavBar.vue';
    import AppFooter from './AppFooter.vue';

    export default {
        name: 'app',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components: {NavBar, AppFooter}
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    @import '../styles/general';

    @import url('https://fonts.googleapis.com/css?family=Cormorant+Garamond:300,400,500');

    // Fonts

    [class*="fa-"]:before {
        font-family: 'FontAwesome', sans-serif;
    }

    html {
        margin: 0;
        padding: 0;
        font-size: 16px;
        color: $color--text-primary;
        font-family: 'Cormorant Garamond', serif;
    }

    body {
        margin: 0;
        padding: 0;
        margin-left: 3rem;
        min-width: calc(320px - 3rem);
        background-image: url("#{$image-base-url}5/crossword_tggzxa.png");

        @include breakpoint(tablet){
            margin-left: $nav-width;
        }
    }

    h1, h2, h3, h4, h5, h6 {font-weight: 400;}

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    img{max-width: 100%;}

    // Helpers

    .material-card {
        padding: 1rem;
        background-color: $color--white;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

        @include breakpoint(tablet){
            padding: 2rem;
        }
    }

    .clearfix{overflow: auto;}

    .text-center{text-align: center;}
    .text-right{text-align: right;}

    .float-right{float: right};
    .float-left{float: left};

    .font--white{color: $color--white;}
    .font--back{color: $color--text-primary;}

    .bg--black{background-color: black;}

    .no-top-margin{margin-top: 0;}

    .hidden{display: none !important;}

    .module{
        position: relative;
        display: block;
        margin-bottom: 2rem;
    }

    .button{
        padding: 0.5rem 2rem;
        background-color: $color--white;
        color: $color--text-primary;
        font-size: 1rem;
        border: 0;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        transition: all 0.1s;
        text-transform: uppercase;
        cursor: pointer;

        &:hover{
            box-shadow: 0 3px 5px rgba(0,0,0,0.13), 0 3px 4px rgba(0,0,0,0.22);
        }
    }

    .btn:hover{
        box-shadow: 0 14px 28px rgba(0,0,0,0.13), 0 10px 10px rgba(0,0,0,0.22);
    }

    .grid-container{
        position: relative;
        width: calc(100% - 2rem);
        max-width: 1040px;
        margin: 0 1rem 1rem;
        @include flexbox();

        @include breakpoint(tablet){
            width: calc(100% - 4rem);
            margin: 0 auto 2rem 2rem;
        }
    }
</style>
