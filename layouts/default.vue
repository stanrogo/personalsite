<template>
  <div id="app">
		<nav-bar/>
		<nuxt/>
		<my-footer/>
	</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
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
	@import './assets/scss/variables';
	@import './assets/scss/bootstrap';

	#app{
		max-width: 1920px;
		margin: 0 auto;
		background-image: url("https://res.cloudinary.com/stanrogo/image/upload/q_58/v1485563095/Future/crossword_tggzxa.png");
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

	// Hidden anchor class to be able to navigate to from the nav bar
	.anchor{
		position: relative;
		display: block;
		visibility: hidden;
		top: -$navbar-height;
	}

	// Helpers
	.material-card {
		@include breakpoint(tablet){
			@include material-shadow();
			box-sizing: border-box;
			padding: 2rem;
			background-color: $color--white;
			border-radius: 0.25rem;
		}
	}
</style>
