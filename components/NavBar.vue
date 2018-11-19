<template>
<b-navbar toggleable="md" type="dark" variant="dark" class="navbar">
    <b-navbar-brand href="/">
        <img src="/icons/favicon-32x32.png" width="30" height="30" class="d-inline-block align-top" alt="Home Icon">
        Stanrogo
    </b-navbar-brand>
    <b-navbar-toggle target="nav_collapse"/>
    <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
            <b-nav-item :to="item.to" v-for="item in navItems" :key="item.name" :exact="item.exact">
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
                    to: '/',
                    exact: true,
                },
                {
                    name: 'Blog',
                    to: '/blog',
                    exact: false,
                },
            ],
        };
    },
};
</script>
