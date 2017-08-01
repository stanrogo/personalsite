<template>

    <nav id="nav-bar">

        <div class="title-wrapper">
            <img class="logo" :src="constructImageUrl('homescreen192.png')">
            <router-link v-on:click="toggleMenu($event, true)" to="/" class="title">
                STANROGO
            </router-link>

            <button class="hamburger" v-bind:class="{'fa-remove': sidebarOpen, 'fa-reorder': !sidebarOpen}" v-on:click="toggleMenu($event, true)"></button>
        </div>

        <ul class="nav-links grid-container" v-bind:class="{'nav-links--hidden': !sidebarOpen}">
            <li v-for="link in links" class="nav-link" v-on:click="toggleMenu">
                <router-link class="nav-link-inner" :class="link.icon"  v-bind:to="link.route" :exact="link.exact" replace>
                    {{link.name}}
                </router-link>
            </li>
        </ul>
    </nav>

</template>

<script>

    export default {
        name: 'nav-bar',
        data () {
            return {
                links: [
                    {name: 'Home', route: '/', icon: 'fa-user', exact: true},
                    {name: 'Work', route: '/work', icon: 'fa-desktop', exact: true},
                    {name: 'Blog', route: '/blog', icon: 'fa-edit', exact: false},
                ]
            }
        },
        computed: {
            sidebarOpen: function(){
                return this.vuexStore.state.ui.sidebarOpen;
            },
            routeName: function(){
                return this.vuexStore.state.ui.currentRouteName;
            }
        },
        methods: {
            toggleMenu: function(event,  biDirection = false) {

                if(biDirection || this.sidebarOpen){

                    this.vuexStore.commit('TOGGLE_SIDEBAR');
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
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: $fourth-floor;

        @include breakpoint(tablet){
            @include flex-direction(row);
        }

        .title-wrapper{
            @include flexbox();
        }

        .logo{
            width: 2rem;
            height: 2rem;
            margin: 1.4rem 0 0 1rem;

            @include breakpoint(tablet){
                margin: 1.4rem 0 0 2rem;
            }
        }

        .title {
            display: block;
            cursor: pointer;
            padding: 1rem 1.5rem 1rem 1rem;
            margin-right: auto;
            text-decoration: none;
            color: $color--white;
            font-size: 2rem;
            line-height: 3.2rem;
            text-transform: uppercase;

            @include breakpoint(tablet){
                flex: 100px;
            }
        }

        .nav-links {
            @include flexbox();
            @include justify-content(space-between);
            @include flex-wrap(wrap);
            width: calc(100% - 2rem);
            text-align: center;
            margin: 1rem 1rem 1rem auto;

            @include breakpoint(tablet){
                @include justify-content(flex-end);
            }

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

            .nav-link{
                width: 50%;

                @include breakpoint(tablet){
                    width: auto;
                    margin: 0 0 0 1rem;
                }
            }
        }

        .nav-link a{
            display: block;
            cursor: pointer;
            padding: 1rem 1.2rem;
            text-decoration: none;
            color: $color--white;
            text-transform: uppercase;

            @include breakpoint(tablet){
                padding: 1rem 1.5rem;
            }

            &:hover:not(.router-link-active){
                text-decoration: none;
                background-color: $color--accent;
            }

            &:before{
                box-sizing: border-box;
                padding-right: 0.5rem;
            }
        }

        .hamburger {
            padding: 1rem;
            background: transparent;
            border: none;
            cursor: pointer;

            @include breakpoint(tablet){
                display: none;
            }

            &:before{
                font-size: 1.2rem;
                line-height: 0.8rem;
                vertical-align: middle;
                color: $color--white;
            }
        }
    }
</style>