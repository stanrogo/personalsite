<template>
    <div id="home">
        <hero></hero>
        <skills></skills>
    </div>
</template>

<script>
    import Hero from './Hero.vue';
    import Skills from './Skills.vue';

    export default {
        name: 'home',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components: {Hero, Skills}
    }
</script>

<style rel="stylesheet/scss" lang="sass">
    @import '../styles/general';


</style>
