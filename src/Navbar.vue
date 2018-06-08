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
            <b-nav-item v-for="route in $router.options.routes"
                :key="route.name" v-if="route.name !== 'Post'"
                :href="route">{{route.name}}
            </b-nav-item>
        </b-navbar-nav>
    </b-collapse>
</b-navbar>
</template>

<script>
export default {
	name: 'navbar',
};
</script>
