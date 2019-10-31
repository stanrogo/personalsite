<template>
	<article id="about" class="row justify-content-between padded-section">
		<div class="col-12 col-md-6">
			<h1>About Me</h1>
		</div>
		<div class="col-12 col-md-6">
			<h2 class="sub-heading text-secondary">
				I'm into VueJS, Performant Databases and all things web.
			</h2>
		</div>
		<div class="col-12 col-sm-6 col-lg-4">
			<img :src="photo + '?w=500&h=700&fit=pad&fm=jpg&fl=progressive'" class="photo">
		</div>
		<div class="col-12 col-sm-6">
			<h2 class="name mb-4">
				Stanley Clark
			</h2>
			<div v-html="$md.render(description)" />
		</div>
	</article>
</template>

<script>
export default {
	name: 'About',
	async asyncData({ app, }) {
		const entries = await app.$contentful.getEntries({
			content_type: 'introduction',
		});
		return {
			description: entries.items[0].fields.description,
			photo: entries.items[0].fields.photo.fields.file.url,
		};
	},
};
</script>

<style lang="scss">
	@import '~assets/scss/variables';

	#about {
		.photo {
			margin-bottom: 2rem;
		}

		.sub-heading{
			margin: 2rem 0;

			@include breakpoint(tablet){
				margin: 0 0 4rem;
			}
		}
	}
</style>
