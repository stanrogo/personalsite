<template>
<section id="hero" class="my-4">
    <div class="background--overlay"></div>
    <section class="container h-100 text-white">
        <div class="row align-items-center h-100">
            <div class="col-sm">
                <h1>I'm <strong>Stanley Clark</strong></h1>
                <h2>Front end web developer and student, Eindhoven</h2>
                <a href="cv-dutch.pdf" target="_blank" class="btn btn-primary my-4">
                    Download My Resume!
                </a>
                <div class="intro-wrapper" v-if="description">
                    <vue-markdown>{{description}}</vue-markdown>
                </div>
            </div>
        </div>
    </section>
</section>
</template>

<script>
import VueMarkdown from 'vue-markdown';

export default {
    name: 'Hero',
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

<style lang="scss">
@import './assets/scss/variables';

#hero{
    position: relative;
    min-height: 1300px;
    height: calc(100vh - #{$navbar-height} - 3rem);
    background-image: url("https://res.cloudinary.com/stanrogo/image/upload/q_50/v1501628116/P1310020_kjh67g.jpg");
    background-size: cover;
    filter: blur(0px) grayscale(100%);

    @media (min-width: 400px) {
        min-height: 1000px;
    }

    @media (min-width: 576px) {
        min-height: 820px;
    }

    @media (min-width: 768px) {
        min-height: 700px;
    }

    @media (min-width: 992px) {
        min-height: 600px;
    }

    @media (min-width: 1200px) {
        min-height: 600px;
    }

    .btn{
        @include material-shadow();
    }

	.background--overlay{
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.7);
	}
}
</style>
