<template>
  <div id="app">
		<nav-bar/>
		<nuxt/>
		<my-footer/>
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
		background-image: url("/images/furley_bg.png");
	}

	// Some standard body styling
	body {
		padding: $navbar-height 0 0 0;
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
		@include breakpoint(tablet){
			box-sizing: border-box;
			padding: 2rem;
			background-color: $color--white;
		}
	}
</style>
