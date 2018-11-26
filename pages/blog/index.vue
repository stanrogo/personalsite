<template>
    <section id="blog" class="row my-4" v-if="posts">
        <div class="mb-4 col-12" v-for="(post, index) in posts" :key="post.id">
            <FeedItem :post="post"/>
            <hr v-if="index < posts.length - 1"/>
        </div>

    </section>
</template>

<script>
    import FeedItem from '~/components/blog/FeedItem';

    export default {
        name: 'Blog',
        components: {
            FeedItem,
        },
        async asyncData({app}) {
            const posts = await app.$contentful.getEntries({
                'content_type': 'blogPost',
                'order': '-fields.date',
            });
            return {
                posts: posts.items.map(x => x.fields),
            };
        },
    };
</script>
