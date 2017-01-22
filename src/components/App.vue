<template>
    <div id="app">
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
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components: {NavBar, AppFooter}
    }
</script>

<style rel="stylesheet/scss" lang="sass">
    @import '../styles/general';


</style>
