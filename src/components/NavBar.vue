<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">

    <nav id="nav-bar" v-bind:class="{ 'is-hidden-mobile': !hamburgerActive}" v-on:click.stop="toggleMenu">
        <div class="title">
            STANROGO
        </div>
        <ul class="nav-links">
            <li v-for="(link, index) in links" class="nav-link" v-bind:class="{ 'is-active': links[index].isActive}">
                <a :href="link.route" v-on:click.stop="goTo(index)"
                    :class="link.icon"
                >{{link.name}}</a>
            </li>
        </ul>
        <button class="hamburger"
                v-bind:class="{ 'fontawesome-remove': hamburgerActive, 'fontawesome-reorder': !hamburgerActive}"
                v-on:click.stop="toggleMenu"
        ></button>
    </nav>
</template>

<script>
    export default {
        name: 'nav-bar',
        data () {
            return {
                links: [
                    {name: 'Intro', route: '#/', isActive: true, icon: 'fontawesome-user'},
                    {name: 'Work', route: '#/work', isActive: false, icon: 'fontawesome-desktop'},
                    {name: 'Blog', route: '#/blog', isActive: false, icon: 'fontawesome-edit'},
                    {name: 'LinkedIn', route: 'https://www.linkedin.com/in/stanleyclark', isActive: false, icon: 'fontawesome-linkedin'},
                    {name: 'Email', route: 'mailto:me@stanrogo.com?Subject=I%20Want%20To%20Ask%20You%20Something!', isActive: false, icon: 'fontawesome-file-alt'},
                    {name: 'Twitter', route: 'https://www.twitter.com', isActive: false, icon: 'fontawesome-twitter'}
                ],
                hamburgerActive: false
            }
        },
        methods: {
            toggleMenu: function() {

                this.hamburgerActive = !this.hamburgerActive;
            },
            goTo: function(index){

                for (const link of this.links) {

                    link.isActive = false;
                }

                this.links[index].isActive = true;
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">

    @import '../styles/general';

    #nav-bar {
        position: fixed;
        top: 0;
        left: 0;
        width: $nav-width;
        bottom: 0;
        z-index: $fourth-floor;
        background: $color--text-primary;
        color: $color--white;
        text-align: right;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

        &.is-hidden-mobile{
            left: calc(-1 * #{$nav-width} + 3rem);
            padding-right: 3rem;

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

        .nav-link.is-active a{
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