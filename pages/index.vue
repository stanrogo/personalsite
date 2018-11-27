<template>
	<div id="home">
		<hero />
		<work :work="work" class="mb-4" />
	</div>
</template>

<script>
import Hero from '~/components/home/Hero.vue';
import Work from '~/components/home/Work.vue';

export default {
	name: 'App',
	components: {
		Hero,
		Work,
	},
	async asyncData({ app, }) {
		const introduction = await app.$contentful.getEntries({
			content_type: 'introduction',
		});
		const projects = await app.$contentful.getEntries({
			content_type: 'portfolio',
		});
		const jobs = await app.$contentful.getEntries({
			content_type: 'work',
			order: '-fields.start',
		});
		const mappedProjects = projects.items
			.map(x => x.fields)
			.map(x => {
				return {
					name: x.title,
					sub: x.type,
					link: x.pageName,
					type: 'projects',
					img: x.photo && x.photo.fields.file.url,
				};
			});
		const mappedJobs = jobs.items
			.map(x => x.fields)
			.map(x => {
				return {
					name: x.company,
					sub: x.role,
					link: x.pageName,
					type: 'work',
					img: x.photo && x.photo.fields.file.url,
				};
			});

		return {
			description: introduction.items[0].fields.description,
			work: mappedJobs.concat(mappedProjects),
		};
	},
};
</script>
