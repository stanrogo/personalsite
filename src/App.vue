<template>
	<div id="app">
		<navbar></navbar>
		<router-view></router-view>
		<my-footer></my-footer>
	</div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import MyFooter from './components/Footer.vue';
import VueRouter from 'vue-router';

export default {
	name: 'App',
	components: {
		Navbar,
		MyFooter,
	},
};
</script>

<style lang="scss">
	@import './resources/assets/sass/variables';
	@import './resources/assets/sass/default';

	#app{
		max-width: 1920px;
		margin: 0 auto;
		background-image: url("https://res.cloudinary.com/stanrogo/image/upload/q_58/v1485563095/Future/crossword_tggzxa.png");
	}
</style>
