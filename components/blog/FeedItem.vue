<template>
	<section class="feed-item">
		<h1 class="h3 mb-2">
			{{ post.title }}
		</h1>
		<div class="mb-2">
			<span class="tag">{{ post.date | moment("MMMM D, YYYY") }} |</span>
			<span v-for="(tag, index) in post.tags" :key="tag.id" class="tag">
				{{ tag }}<span v-if="index < post.tags.length - 1">,</span>
			</span>
		</div>
		<div v-if="post.content" class="mb-2">
			{{ post.content.substr(0, 500) + '...' }}
		</div>
		<router-link :to="'/blog/' + post.cleanUrl">
			Continue Reading
		</router-link>
	</section>
</template>

<script>
export default {
	name: 'FeedItem',
	props: {
		post: {
			type: Object,
			default: () => {},
		},
	},
};
</script>

<style lang="scss">
	.feed-item{
		.tag{
			text-transform: uppercase;
			font-size: 13px;
			color: #767676;
		}
	}
</style>
