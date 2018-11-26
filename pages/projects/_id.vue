<template>
    <article id="project-page" class="row" v-if="project">
        <div class="col-12 col-md-6">
            <h1>{{ project.title }}</h1>
            <h2 class="h4 role">{{ project.type }}</h2>
            <vue-markdown>{{ project.description }}</vue-markdown>
            <div class="mb-4">
                <span class="link-label">Website Link: </span>
                <a :href="project.link" target="_blank" class="link-text">{{ project.link }}</a>
            </div>
        </div>
        <div class="col-12 col-md-6">
            <img class="photo" :src="project.image && project.image.fields.file.url">
        </div>
    </article>
</template>

<script>
    import VueMarkdown from 'vue-markdown';
    export default {
        name: 'PortfolioItem',
        components: {
            VueMarkdown,
        },
        async asyncData ({ app, params }) {
            const entries = await app.$contentful.getEntries({
                'content_type': 'portfolio',
                'fields.pageName': params.id,
            });
            return {
                project: entries.items[0].fields,
            };
        }
    };
</script>

<style lang="scss">
    #project-page{
        padding: 4rem 0;

        .photo{
            width: 100%;
        }

        .role, .link-label{
            color: #767676;
        }


    }
</style>
