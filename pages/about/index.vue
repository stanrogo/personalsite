<template>
    <article id="about" class="row">
        <div class="col-4">
            <h1 class="mb-4">About Me</h1>
            <img class="photo" src="images/me.jpeg">
        </div>
        <div class="col-8">
            <vue-markdown>{{ description }}</vue-markdown>
        </div>

    </article>
</template>

<script>
    import VueMarkdown from 'vue-markdown';
    export default {
        name: 'About',
        components: {
            VueMarkdown,
        },
        async asyncData ({ app, params }) {
            const entries = await app.$contentful.getEntries({
                'content_type': 'introduction',
            });
            return {
                description: entries.items[0].fields.description,
            };
        }
    };
</script>

<style lang="scss">
    #about{
        padding: 4rem 0;

        .photo{
            width: 100%;
        }

        .role{
            color: #767676;
        }
    }
</style>
