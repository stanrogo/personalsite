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
</style>
