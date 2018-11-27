<template>
	<article v-if="job" id="work-page" class="row padded-section">
		<div class="col-12 col-md-6">
			<h1>{{ job.company }}</h1>
			<h2 class="h4 role text-secondary">{{ job.role }}</h2>
			<p>
				{{ job.start | moment("MMMM YYYY") }} -
				<span v-if="job.end"> {{ job.end | moment("MMMM YYYY") }} </span>
				<span v-if="!job.end"> present </span>
			</p>
			<vue-markdown :toc="false">{{ job.description }}</vue-markdown>
		</div>
		<div class="col-12 col-md-6">
			<img :src="job.photo && job.photo.fields.file.url">
		</div>
	</article>
</template>

<script>
export default {
	name: 'PortfolioItem',
	async asyncData({app, params,}) {
		const entries = await app.$contentful.getEntries({
			content_type: 'work',
			'fields.pageName': params.id,
		});
		return {
			job: entries.items[0].fields,
		};
	},
};
</script>
