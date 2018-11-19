<template>
<section id="blog">
	<Hero/>
	<div class="bg-white">
        <div class="container p-4">
            <div class="row">
                <FeedItem class="mb-4 post-container post-link col-xs-12"
                          :key="post.id" v-for="post in posts" :post="post"/>
            </div>
        </div>
	</div>
</section>
</template>

<script>
import Hero from '~/components/blog/Hero.vue';
import FeedItem from "../../components/blog/FeedItem";

export default {
	name: 'Blog',
	components: {
        FeedItem,
		Hero,
	},
    async asyncData ({ app }) {
        const posts = await app.$contentful.getEntries({
            'content_type': 'blogPost',
            'order': '-fields.date',
        });
        return{
            posts: posts.items.map(x => x.fields),
        };
    },
};
</script>
