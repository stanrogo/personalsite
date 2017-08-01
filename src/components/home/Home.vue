<template>
    <div id="home">
        <hero></hero>
        <!--<skills></skills>-->
    </div>
</template>

<script>
    import Hero from './Hero.vue';
    import Skills from './Skills.vue';

    export default {
        name: 'home',
        components: {Hero, Skills}
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    @import '../../styles/general';

    #home{
        position: relative;
        z-index: $second-floor;
    }
</style>
