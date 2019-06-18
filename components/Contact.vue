<template>
	<section id="contact" class="d-flex align-items-center justify-content-center flex-wrap">
		<a v-for="link in contactLinks" :key="link.name" :href="link.link" target="_blank" rel="noopener"
			class="text-body text-uppercase font-small text-hover-secondary px-3 pb-3">
			{{ link.name }}
		</a>
	</section>
</template>

<script>
export default {
	name: 'Contact',
	computed: {
		contactLinks() {
			return this.$store.state.contactLinks;
		},
	},
};
</script>
