<template>
<div id="home" class="text-white">
	<hero/>
	<description :description="description"/>
	<work :work="work"/>
	<portfolio :projects="projects"/>
</div>
</template>

<script>
import Hero from '~/components/home/Hero.vue';
import Description from '~/components/home/Description.vue';
import Work from '~/components/home/Work.vue';
import Portfolio from '~/components/home/Portfolio.vue';

export default {
	name: 'App',
	components: {
		Hero,
		Description,
		Work,
		Portfolio,
	},
	async asyncData ({ app }) {
		const introduction = await app.$contentful.getEntries({ 'content_type': 'introduction' });
		const projects = await app.$contentful.getEntries({ 'content_type': 'portfolio' });
		const jobs = await app.$contentful.getEntries({
			'content_type': 'work',
			'order': '-fields.start'
		});

		return {
			description: introduction.items[0].fields.description,
			work: jobs.items.map(x => x.fields),
			projects: projects.items.map(x => x.fields),
		};
	},
};
</script>
