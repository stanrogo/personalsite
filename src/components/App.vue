<template>
    <div id="app">
        <div class="background background--image"></div>
        <div class="background background--overlay" :class="{'full-opacity' : routeName !== 'Home'}"></div>
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
        components: {NavBar, AppFooter},
        computed: {
            routeName: function () {
                return this.vuexStore.state.ui.currentRouteName;
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    @import '../styles/general';

    // default reset styling

    html {
        margin: 0;
        padding: 0;
        font-size: 16px;
        line-height: 1.5;
        color: $color--text-primary;
        font-family: Helvetica, Arial, 'sans-serif';
    }

    body {
        margin: 0;
        padding: 5.5rem 0 0 0;
        min-width: 320px;
        overflow-y:scroll;
        background-image: url("#{$image-base-url-stripped}v1485570757/crossword2_fehfns.png");
    }

    .background{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }

    .background--image{
        background-image: url("#{$image-base-url-stripped}v1501628116/P1310020_kjh67g.jpg");
        background-size: cover;
        filter: blur(0px) grayscale(100%);
    }

    .background--overlay{
        background-color: rgba(0, 0, 0, 0.7);

        &.full-opacity{
            background-color: $color--text-primary;
        }
    }

    // Only apply fonts when they have actually loaded

    html.wf-active{
        font-family: 'Ubuntu', sans-serif;
        button {
            font-family: 'Ubuntu', sans-serif;
        }
        [class*="fa-"]:before {
            font-family: 'FontAwesome', sans-serif;
        }
    }

    h1, h2, h3, h4, h5, h6 {font-weight: 400;}

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    a{
        color: #1976D2;
        text-decoration: none;

        &:visited{
            color: #1976D2;
        }
    }

    img{max-width: 100%;}

    // Helpers

    .material-card {
        box-sizing: border-box;
        padding: 1rem;
        background-color: $color--white;
        @include material-shadow();
        @include borderbox();

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

    .button{
        padding: 0.5rem 2rem;
        background-color: $color--white;
        color: $color--text-primary;
        font-size: 1rem;
        border: 0;
        @include material-shadow();
        transition: all 0.1s;
        text-transform: uppercase;
        cursor: pointer;

        &:hover{
            box-shadow: 0 3px 5px rgba(0,0,0,0.13), 0 3px 4px rgba(0,0,0,0.22);
            color: $color--accent;
        }
    }

    .grid-container{
        position: relative;
        @include flexbox();
        width: calc(100% - 2rem);
        max-width: 1040px;
        margin: 1rem;

        @include breakpoint(tablet){
            width: calc(100% - 4rem);
            margin: 2rem auto;
        }
    }

    .card-image{
        margin-left: -1rem;
        width: calc(100% + 2rem);
        max-width: none;

        @include breakpoint(tablet){
            margin-left: -2rem;
            width: calc(100% + 4rem);
        }
    }

    .section-heading{
        color: $color--white;
        text-transform: uppercase;
        font-size: 2rem;
        text-align: center;
    }
</style>
