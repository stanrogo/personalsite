<template>
<div id="home" class="text-white">
	<hero/>
	<description :description="description"/>
	<work :work="work"/>
	<portfolio :projects="projects"/>
	<post-widget :posts="posts"/>
</div>
</template>

<script>
import Hero from '~/components/Hero.vue';
import Description from '~/components/Description.vue';
import Work from '~/components/Work.vue';
import Portfolio from '~/components/Portfolio/Portfolio.vue';
import PostWidget from '~/components/PostWidget.vue'

export default {
	name: 'App',
	components: {
		Hero,
		Description,
		Work,
		Portfolio,
		PostWidget,
	},
	async asyncData ({ app }) {
		const introduction = await app.$contentful.getEntries({ 'content_type': 'introduction' });
		const projects = await app.$contentful.getEntries({ 'content_type': 'portfolio' });
		const articles = await app.$contentful.getEntries({ 'content_type': 'blogPost' });
		const jobs = await app.$contentful.getEntries({
			'content_type': 'work',
			'order': '-fields.start'
		});

		return {
			description: introduction.items[0].fields.description,
			work: jobs.items.map(x => x.fields),
			projects: projects.items.map(x => x.fields),
			posts: articles.items.map(x => x.fields),
		};
	},
};
</script>
