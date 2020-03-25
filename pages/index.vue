<template>
	<div id="home">
		<hero />
		<about :description="description" class="mb-4" />
		<projects :projects="projects" class="mb-4" />
	</div>
</template>

<script>
import Hero from '~/components/Hero.vue';
import About from '~/components/About.vue';
import Projects from '~/components/Projects.vue';

export default {
	name: 'App',
	components: {
		Hero,
		About,
		Projects,
	},
	async asyncData({ app, }) {
		const introduction = await app.$contentful.getEntries({
			content_type: 'introduction',
		});
		const projects = await app.$contentful.getEntries({
			content_type: 'portfolio',
		});

		return {
			description: introduction.items[0].fields.description,
			projects: projects.items.map(x => x.fields),
		};
	},
};
</script>
