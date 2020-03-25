<template>
	<section id="about" class="d-flex align-items-left justify-content-left flex-wrap">
		<h1 class="heading">
			About Me
		</h1>
		<div v-html="$md.render(description)" />
	</section>
</template>

<script>
export default {
	name: 'About',
	props: {
		description: {
			type: String,
			default: () => '',
		},
	},
};
</script>
