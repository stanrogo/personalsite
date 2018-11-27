<template>
	<article v-if="project" id="project-page" class="row padded-section">
		<div class="col-12 col-md-6">
			<h1>{{ project.title }}</h1>
			<h2 class="h4 text-secondary">{{ project.type }}</h2>
			<vue-markdown :toc="false">{{ project.description }}</vue-markdown>
			<div class="mb-4">
				<span class="text-secondary">Website Link: </span>
				<a :href="project.link" target="_blank" class="link-text">{{ project.link }}</a>
			</div>
		</div>
		<div class="col-12 col-md-6">
			<img :src="project.image && project.image.fields.file.url">
		</div>
	</article>
</template>

<script>
export default {
	name: 'PortfolioItem',
	async asyncData ({ app, params, }) {
		const entries = await app.$contentful.getEntries({
			'content_type': 'portfolio',
			'fields.pageName': params.id,
		});
		return {
			project: entries.items[0].fields,
		};
	},
};
</script>
