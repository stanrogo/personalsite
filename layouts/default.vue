<template>
	<div id="app" class="container bg-white text-body">
		<div class="row">
			<div class="col">
				<nav-bar/>
				<nuxt/>
				<my-footer/>
			</div>
		</div>
	</div>
</template>

<script>
import NavBar from '~/components/NavBar.vue';
import MyFooter from '~/components/Footer.vue';

export default {
	name: 'App',
	components: {
		NavBar,
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
</style>
