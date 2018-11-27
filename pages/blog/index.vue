<template>
	<section v-if="posts" id="blog" class="row my-4">
		<div v-for="(post, index) in posts" :key="post.id" class="mb-4 col-12">
			<FeedItem :post="post"/>
			<hr v-if="index < posts.length - 1">
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
	async asyncData({app,}) {
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
