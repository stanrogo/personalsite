<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">

    <nav id="nav-bar" v-bind:class="{ 'is-hidden-mobile': !sidebarOpen}" v-on:click.stop="toggleMenu">
        <div class="title nav-link">
            <router-link v-on:click="toggleMenu" to="/">STANROGO</router-link>
        </div>

        <button class="hamburger"
                v-bind:class="{ 'fa-remove': sidebarOpen, 'fa-reorder': !sidebarOpen}"
                v-on:click.stop="toggleMenu"
        >
            {{routeName}}
        </button>

        <ul class="nav-links grid-container" v-bind:class="{'nav-links--hidden': !sidebarOpen}">
            <li v-for="link in links" class="nav-link">

                <router-link
                        v-on:click="toggleMenu" class="nav-link-inner" :class="link.icon"
                        v-bind:to="link.route" replace :exact="link.exact"
                >
                    {{link.name}}
                </router-link>

            </li>
            <li v-for="link in externalLinks" class="nav-link">
                <a class="nav-link-inner" :class="link.icon" :href="link.route" target="_blank">{{link.name}}</a>
            </li>
        </ul>
    </nav>
</template>

<script>

    import store from '../vuex/index.js';

    export default {
        name: 'nav-bar',
        data () {
            return {
                links: [
                    {name: 'Home', route: '/', icon: 'fa-user', exact: true},
                    {name: 'Work', route: '/work', icon: 'fa-desktop', exact: true},
                    {name: 'Blog', route: '/blog', icon: 'fa-edit', exact: false},
                ],
                externalLinks: [
                    {
                        name: 'LinkedIn',
                        route: 'https://www.linkedin.com/in/stanleyclark',
                        icon: 'fa-linkedin'
                    },
                    {
                        name: 'Email',
                        route: 'mailto:me@stanrogo.com?Subject=I%20Want%20To%20Ask%20You%20Something!',
                        icon: ' fa-cloud'
                    },
                    {
                        name: 'Twitter',
                        route: 'https://www.twitter.com',
                        icon: 'fa-twitter'
                    }
                ]
            }
        },
        computed: {
            sidebarOpen(){
                return store.state.ui.sidebarOpen;
            },
            routeName(){
                return store.state.ui.currentRouteName;
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
        @include flexbox();
        @include flex-direction(column);
        position: relative;
        background: $color--white;
        @include material-shadow();
        z-index: $first-floor;

        .title {
            padding: 2rem 0 0;
            font-size: 2rem;
            margin: 0 auto;

            @include breakpoint(tablet){
                padding-bottom: 2rem;
            }
        }

        .nav-links {
            @include flexbox();
            @include justify-content(space-between);
            @include flex-wrap(wrap);

            .router-link-active{
                background-color: $color--accent ;
                color: $color--white;
            }

            &.nav-links--hidden{
                display: none;

                @include breakpoint(tablet){
                    @include flexbox();
                }
            }
        }

        .nav-link a{
            display: block;
            cursor: pointer;
            padding: 1rem 2rem;
            text-decoration: none;
            color: $color--text-primary;

            &:hover:not(.router-link-active){
                text-decoration: none;
                color: $color--accent;
            }

            &:before{
                box-sizing: border-box;
                padding-right: 1rem;
            }
        }

        .hamburger {
            padding: 1rem;
            background: transparent;
            border: none;
            cursor: pointer;
            width: 100%;
            @include align-self(center);

            @include breakpoint(tablet){
                display: none;
            }

            &:before{
                padding-right: 1rem;
                font-size: 1.2rem;
                line-height: 0.8rem;
                vertical-align: middle;
            }
        }
    }
</style>