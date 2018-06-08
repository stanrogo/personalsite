<template>
<div id="home">
    <div class="background--overlay"></div>
    <section id="hero" class="container h-100 text-white">
        <div class="row align-items-center h-100">
            <div class="col-sm">
                <h1>I'm <strong>Stanley Clark</strong></h1>
                <h2>Front end web developer and student, Eindhoven</h2>
                <a href="" target="_blank" class="btn btn-primary my-4">
                    Download My Resume!
                </a>
                <div class="intro-wrapper" v-if="description">
                    <vue-markdown>{{description}}</vue-markdown>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import VueMarkdown from 'vue-markdown';

export default {
    name: 'Home',
    components: {
        VueMarkdown,
    },
    asyncComputed: {
        async description() {
            const entries = await this.$contentful.getEntries({
                'content_type': 'introduction',
            });
            return entries.items[0].fields.description;
        },
    },
};
</script>

<style lang="scss" scoped>
@import './resources/assets/sass/variables';

#home{
    position: relative;
    height: calc(100vh - #{$navbar-height});
    background-image: url("https://res.cloudinary.com/stanrogo/image/upload/q_50/v1501628116/P1310020_kjh67g.jpg");
    background-size: cover;
    filter: blur(0px) grayscale(100%);
}
</style>
