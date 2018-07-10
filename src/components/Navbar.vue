<template>
<b-navbar toggleable="md" type="dark" variant="dark" fixed="top">
    <b-navbar-brand href="#">
        <img src="icons/favicon-32x32.png" width="30" height="30"
            class="d-inline-block align-top" alt="">
            Stanrogo
    </b-navbar-brand>
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
            <b-nav-item :href="'/#' + item.anchor" v-for="item in navItems" :key="item.name" :active="item.active" >
                {{item.name}}
            </b-nav-item>
        </b-navbar-nav>
    </b-collapse>
</b-navbar>
</template>

<script>
export default {
    name: 'navbar',
    data(){
        return {
            navItems: [
                {
                    name: 'Home',
                    id: 'hero',
                    anchor: 'hero--a',
                    active: false,
                },
                {
                    name: 'Work',
                    id: 'work',
                    anchor: 'work--a',
                    active: false,
                },
                {
                    name: 'Code',
                    id: 'portfolio',
                    anchor: 'portfolio--a',
                    active: false,
                },
                {
                    name: 'Blog',
                    id: 'blog',
                    anchor: 'blog--a',
                    active: false,
                }
            ],
        };
    },
    methods: {
        inView(elID){
            const element = document.getElementById(elID);
            if(!element) return false;
            const coords = element.getBoundingClientRect();
            return coords.bottom > 56 && coords.bottom <= coords.height + 56;
        },
        handleScroll(){
            this.navItems.forEach((item) => {
                item.active = this.inView(item.id);
            });
        },
    },
    created(){
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed(){
        window.removeEventListener('scroll', this.handleScroll);
    },
    mounted(){
        this.handleScroll();
    },
};
</script>
