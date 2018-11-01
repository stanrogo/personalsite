<template>
  <div id="app" class="container-fluid">
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
  @import 'node_modules/bootstrap/dist/css/bootstrap.min.css';
  @import 'node_modules/bootstrap-vue/dist/bootstrap-vue.min.css';
	@import './assets/scss/variables';
	@import './assets/scss/bootstrap';

	#app{
    background: linear-gradient(top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://res.cloudinary.com/stanrogo/image/upload/q_50/v1501628116/P1310020_kjh67g.jpg") no-repeat fixed center center;
    background-size: cover;
	}

	// Some standard body styling
	body {
		padding: 0;
		min-width: 320px;
		overflow-y: scroll;
		overflow-x: hidden;
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
		padding: 2rem 1rem;
		background-color: $color--white;

		@media (min-width: 768px) {
			padding: 2rem;
		}	
	}

	.section-heading{
    text-transform: uppercase;
		color: white;
		display: inline-block;
		font-size: 1.5rem;
	}
</style>
