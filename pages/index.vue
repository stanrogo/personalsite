<template>
	<div id="home" class="row">
		<div class="col">
			<hero class="my-sm-4" />
			<about :description="description" class="my-4" />
		</div>
	</div>
</template>

<script>
import Hero from '~/components/Hero.vue';
import About from '~/components/About.vue';

export default {
	name: 'App',
	components: {
		Hero,
		About,
	},
	async asyncData({ app, }) {
		const introduction = await app.$contentful.getEntries({
			content_type: 'introduction',
		});

		return {
			description: introduction.items[0].fields.description,
		};
	},
};
</script>
