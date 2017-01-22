<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">

    <div id="nav-bar" class="js-header">

        <nav class="grid-container">
            <div class="title">
                <img src="../assets/logomenew.png">
            </div>
            <span class="sub-title" v-if="links[1].isActive">&nbsp; / Blog</span>
            <ul class="nav-links">
                <li v-for="(link, index) in links" class="nav-link" v-bind:class="{ 'is-active': links[index].isActive}">
                    <a :href="link.route" v-on:click="goTo(index)">{{link.name}}</a>
                </li>
            </ul>
            <button class="hamburger fontawesome-reorder" v-on:click="toggleMenu"></button>
        </nav>

        <div class="off-canvas-menu" v-bind:class="{ 'is-active': hamburgerActive }" v-on:click="toggleMenu">
            <div class="off-canvas-wrapper">
                <div class="menu-row">
                    <div class="menu-text">Menu</div>
                    <button class="hamburger fontawesome-remove" v-on:click.stop="toggleMenu"></button>
                </div>
                <ul>
                    <li v-for="(link, index) in links" class="menu-element" v-bind:class="{ 'is-active': links[index].isActive}">
                        <a :href="link.route" v-on:click="goTo(index)" class="menu-link">{{link.name}}</a>
                    </li>
                    <li class="menu-element">
                        <a class="menu-link" href="https://www.linkedin.com/in/stanleyclark" target="_blank">LinkedIn</a>
                    </li>
                    <li class="menu-element">
                        <a class="menu-link" href="mailto:me@stanrogo.com?Subject=I%20Want%20To%20Ask%20You%20Something!"
                           target="_blank">Email</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'nav-bar',
        data () {
            return {
                links: [
                    {name: 'Home', route: '#/', isActive: true},
                    {name: 'Work', route: '#/work', isActive: false},
                    {name: 'Blog', route: '#/blog', isActive: false}
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
        right: 0;
        z-index: $fourth-floor;
        background: $color--primary;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

        .grid-container {
            @include justify-content(space-between);
        }

        .title {
            margin: 0;
            font-size: 2rem;
            cursor: pointer;
            @include align-self(center);
            height: 1rem;

            img{
                position: absolute;
                transform: translateY(-50%);
                top: 45%;
                width: 120px;

            }
        }

        .sub-title {
            padding: 1rem 1rem 1rem 0;
            color: $color--white;
            float: left;
            font-size: 1.4rem;
            cursor: pointer;
        }

        .nav-links {
            display: none;
            @include align-self(center);
            @include breakpoint(tablet){
                display: block;
            }
        }

        .nav-link {
            display: inline-block;
            padding: 1.6rem 3rem;
            cursor: pointer;
            transition: color 0.2s;

            &:hover:not(.is-active) a{
                color: $color--text-primary;
            }

            &.is-active a{
                color: $color--text-primary;
                text-decoration: none;

                &:visited{
                    color: $color--text-primary;
                }
            }

            a{
                text-decoration: none;
                color: $color--grey-medium;

                &:hover{
                    text-decoration: none;
                }

                &:visited{
                    color: $color--grey-medium;
                }
            }
        }

        .hamburger {
            padding: 0.5rem 0.665rem;
            background: $color--white;
            border: none;
            cursor: pointer;
            @include align-self(center);

            @include breakpoint(tablet){
                display: none;
            }
        }

        .off-canvas-menu {
            position: fixed;
            left: 100%;
            right: 0;
            top: 0;
            bottom: 0;
            z-index: $fourth-floor + 1;
            background-color: rgba(0, 0, 0, 0.5);
            transition: left 0.5s;

            @include breakpoint('tablet') {
                display: none;
            }

            &.is-active {
                left: 0;
            }

            .off-canvas-wrapper {
                position: absolute;
                padding: 1.5rem 1rem 1.5rem 3rem;
                width: 80%;
                left: 20%;
                top: 0;
                right: 0;
                bottom: 0;
                background-color: $color--text-primary;
                transition: left 0.5s;
                @include flexbox();
                @include flex-direction(column);
            }

            .menu-row{
                @include flexbox();
                @include justify-content(space-between)
            }

            .menu-text {
                font-size: 1.2rem;
                text-transform: uppercase;
            }

            .menu-element {
                margin: 3rem 0 1rem 2rem;
                text-transform: uppercase;
                border-bottom: 1px solid white;
            }

            .menu-link{
                display: block;
                color: $color--white;
                text-decoration: none;

                &:hover, &:visited{
                    text-decoration: none;
                    color: $color--white;
                }
            }
        }
    }
</style>