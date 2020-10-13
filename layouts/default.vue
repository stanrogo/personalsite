<template>
	<div id="app" class="container bg-white text-body">
		<nuxt />
		<my-footer />
	</div>
</template>

<script>
import MyFooter from '~/components/Footer.vue';

export default {
	name: 'App',
	components: {
		MyFooter,
	},
};
</script>

<style lang="scss">
	@import '~assets/scss/variables';
    @import '~assets/scss/bootstrap';
    @import 'bootstrap/dist/css/bootstrap.min.css';

	// Some standard body styling
	body {
		padding: 0;
		min-width: 320px;
		overflow-y: scroll;
		overflow-x: hidden;
	}

	// Only apply fonts when they have actually loaded
	html.wf-active body{
		font-family: 'Ubuntu', sans-serif;
		button:not([class*="lnr"]) {
			font-family: 'Ubuntu', sans-serif;
		}
	}

	.heading{
		text-transform: uppercase;
	}
</style>
