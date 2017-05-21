<template>

    <nav id="nav-bar">
        <div class="title nav-link">
            <router-link v-on:click="toggleMenu($event, true)" to="/">
                STANROGO
            </router-link>
        </div>

        <button class="hamburger" v-bind:class="{'fa-remove': sidebarOpen, 'fa-reorder': !sidebarOpen}" v-on:click="toggleMenu($event, true)">
            {{routeName}}
        </button>

        <ul class="nav-links grid-container" v-bind:class="{'nav-links--hidden': !sidebarOpen}">
            <li v-for="link in links" class="nav-link" v-on:click="toggleMenu">
                <router-link class="nav-link-inner" :class="link.icon"  v-bind:to="link.route" :exact="link.exact" replace>
                    {{link.name}}
                </router-link>
            </li>
            <li v-for="link in contact" class="nav-link">
                <a class="nav-link-inner" :class="link.icon" :href="link.URL" target="_blank">
                    {{link.name}}
                </a>
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
            @include justify-content(space-around);
            @include flex-wrap(wrap);
            width: calc(100% - 2rem);
            text-align: center;
            margin: 1rem auto;

            @include breakpoint(tablet){
                @include justify-content(space-between);
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
                }
            }
        }

        .nav-link a{
            display: block;
            cursor: pointer;
            padding: 1rem 1.5rem;
            text-decoration: none;
            color: $color--text-primary;

            &:hover:not(.router-link-active){
                text-decoration: none;
                color: $color--accent;
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
            width: 100%;

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