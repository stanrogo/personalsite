<template>
  	<div id="app" class="container-fluid">
		<div class="row">
			<div class="col-12">
				<nav-bar/>
			</div>
			<div class="col-12">
				<nuxt/>
			</div>
			<div class="col-12">
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
  @import 'node_modules/bootstrap/dist/css/bootstrap.min.css';
  @import 'node_modules/bootstrap-vue/dist/bootstrap-vue.min.css';
	@import './assets/scss/variables';
	@import './assets/scss/bootstrap';

	#app{
		max-width: 1920px;
		margin: 0 auto;
		// background-image: url("/images/furley_bg.png");
	}

	// Some standard body styling
	body {
		padding: 0;
		min-width: 320px;
		overflow-y:scroll;
		background-color: #e2e7ea;
	}

	// Only apply fonts when they have actually loaded
	html.wf-active body{
		font-family: 'Ubuntu', sans-serif;
		button:not([class*="lnr"]) {
			font-family: 'Ubuntu', sans-serif;
		}
	}

	// Helpers
	.material-card {
	
			box-sizing: border-box;
			padding: 2rem;
			background-color: $color--white;
		
	}

	.section-heading{
		background: $color--text-primary;
		color: white;
		padding: 1rem;
		margin-bottom: 1.5rem;
		display: inline-block;
		font-size: 1.5rem;
	}
</style>
