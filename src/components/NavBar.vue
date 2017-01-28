<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">

    <nav id="nav-bar" v-bind:class="{ 'is-hidden-mobile': !sidebarOpen}" v-on:click.stop="toggleMenu">
        <div class="title">
            STANROGO
        </div>
        <ul class="nav-links">
            <li v-for="link in links" class="nav-link">
                <router-link v-on:click="toggleMenu" class="nav-link-inner" :class="link.icon" v-bind:to="link.route" replace exact>{{link.name}}</router-link>
            </li>
            <li v-for="link in externalLinks" class="nav-link">
                <a class="nav-link-inner" :class="link.icon" :href="link.route" target="_blank">{{link.name}}</a>
            </li>
        </ul>
        <button class="hamburger"
                v-bind:class="{ 'fontawesome-remove': sidebarOpen, 'fontawesome-reorder': !sidebarOpen}"
                v-on:click.stop="toggleMenu"
        ></button>
    </nav>
</template>

<script>

    import store from '../vuex/index.js';

    export default {
        name: 'nav-bar',
        data () {
            return {
                links: [
                    {name: 'Intro', route: '/', icon: 'fa-user'},
                    {name: 'Work', route: '/work', icon: 'fa-desktop'},
                    {name: 'Blog', route: '/blog', icon: 'fa-edit'},
                ],
                externalLinks: [
                    {name: 'LinkedIn', route: 'https://www.linkedin.com/in/stanleyclark', icon: 'fa-linkedin'},
                    {name: 'Email', route: 'mailto:me@stanrogo.com?Subject=I%20Want%20To%20Ask%20You%20Something!', icon: ' fa-cloud'},
                    {name: 'Twitter', route: 'https://www.twitter.com', icon: 'fa-twitter'}
                ]
            }
        },
        computed: {
            sidebarOpen(){
                return store.state.ui.sidebarOpen;
            }
        },
        methods: {
            toggleMenu: function(event) {

                const isRouterLink = event.target.classList.contains('nav-link-inner');

                if(!isRouterLink){

                    store.commit('TOGGLE_SIDEBAR');
                    return
                }

                if(this.sidebarOpen){

                    store.commit('TOGGLE_SIDEBAR');
                }
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">

    @import '../styles/general';

    #nav-bar {
        @include borderbox();
        position: fixed;
        top: 0;
        left: 0;
        width: 260px;
        bottom: 0;
        z-index: $fourth-floor;
        background: $color--text-primary;
        color: $color--white;
        text-align: right;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

        @include breakpoint(phablet){
            width: $nav-width;
        }

        &.is-hidden-mobile{
            left: calc(-260px + 3rem);
            padding-right: 3rem;

            @include breakpoint(phablet){
                left: calc(-1 * #{$nav-width} + 3rem);
            }

            @include breakpoint(tablet){
                left: 0;
                padding-right: 0;
            }

            .nav-link a:before{
                position: absolute;
                padding-left: 1rem;
                right: 0;
                width: 3rem;
                text-align: center;

                @include breakpoint(tablet){
                    position: relative;
                    padding: 0 1rem 0 0;
                    width: auto;
                }
            }

            .hamburger{
                right: 0;
                left: initial;
            }
        }

        .grid-container {
            @include justify-content(space-between);
        }

        .title {
            margin: 0;
            padding: 2rem;
            font-size: 2rem;
            cursor: pointer;
        }

        .sub-title {
            padding: 1rem 1rem 1rem 0;
            color: $color--white;
            float: left;
            font-size: 1.4rem;
            cursor: pointer;
        }

        .nav-links {
            display: block;
            @include align-self(center);
        }

        .nav-link a{
            display: block;
            cursor: pointer;
            padding: 1rem 2rem;
            text-decoration: none;
            color: $color--white;

            &:visited{
                color: $color--white;
            }

            &:hover{
                text-decoration: none;
            }

            &:before{
                box-sizing: border-box;
                padding-right: 1rem;
            }
        }

        .router-link-active{
            background-color: #1d1d1d ;
        }

        .hamburger {
            position: absolute;
            top: 0;
            left: 0;
            padding: 1rem 1rem;
            background: transparent;
            border: none;
            cursor: pointer;
            @include align-self(center);

            @include breakpoint(tablet){
                display: none;
            }

            &:before{
                color: $color--white;
                font-size: 1.2rem;
            }
        }
    }
</style>