<template>
    <article id="work-page" class="row">
        <div class="col-12 col-md-6">
            <h1>{{ job.company }}</h1>
            <h2 class="h4 role">{{ job.role }}</h2>
            <p>
                {{ job.start | moment("MMMM YYYY") }} -
                <span v-if='job.end'>
                    {{ job.end | moment("MMMM YYYY") }}
                </span>
                <span v-if='!job.end'>
                    present
                </span>
            </p>
            <vue-markdown>{{job.description}}</vue-markdown>
        </div>
        <div class="col-12 col-md-6">
            <img class="photo" :src="job.photo && job.photo.fields.file.url">
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
                'content_type': 'work',
                'fields.pageName': params.id,
            });
            return {
                job: entries.items[0].fields,
            };
        }
    };
</script>

<style lang="scss">
    #work-page{
        padding: 4rem 0;

        .photo{
            width: 100%;
        }

        .role{
            color: #767676;
        }
    }
</style>
