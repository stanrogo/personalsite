<template>
	<section id="projects" class="d-flex flex-column align-items-left justify-content-left flex-wrap">
		<h1 class="heading">
			Projects
		</h1>
		<article v-for="project in projects" :key="project.id" class="portfolio-item d-flex flex-row row mb-4">
			<div class="col-12 col-md-9">
				<div class="mb-4">
					<strong>{{ project.title }}</strong> - {{ project.type }}
				</div>
				<div v-html="$md.render(project.description)" />
				<div class="mb-4">
					<span class="text-secondary">Website Link: </span>
					<a :href="project.link" target="_blank" class="link-text">{{ project.link }}</a>
				</div>
			</div>
			<div class="d-none d-lg-block col-3">
				<picture v-if="project.image">
					<img :src="project.image.fields.file.url + '?w=240&h=240&fit=crop&fm=jpg&fl=progressive'" class="portfolio-item--image" alt="Potfolio Item Image">
				</picture>
			</div>
		</article>
	</section>
</template>

<script>
export default {
	name: 'Projects',
	props: {
		projects: {
			type: Array,
			default: () => [],
		},
	},
};
</script>

<style lang="scss">
	.portfolio-item--image{
		max-width: 15rem;
	}
</style>
