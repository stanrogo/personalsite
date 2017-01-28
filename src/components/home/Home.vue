<template>
    <div id="home">
        <hero></hero>
        <git-hub></git-hub>
        <skills></skills>
    </div>
</template>

<script>
    import Hero from './Hero.vue';
    import Skills from './Skills.vue';
    import GitHub from './GitHub.vue';

    export default {
        name: 'home',
        components: {Hero, GitHub, Skills},
        created() {
            this.$nextTick(() => {

                // Re-render the git hub view on route change

                if(typeof ready == 'undefined'){

                    return;
                }

                ready(start);
            });
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    @import '../../styles/general';
</style>
