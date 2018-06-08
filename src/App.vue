<template>
	<div id="app">
		<navbar></navbar>
		<home></home>
		<work></work>
		<portfolio></portfolio>
		<blog></blog>
	</div>
</template>

<script>

import Home from './Home.vue';
import Work from './Work.vue';
import Portfolio from './Portfolio.vue';
import Blog from './Blog.vue';
import Navbar from './Navbar.vue';

export default {
	name: 'App',
	components: {
		Navbar,
		Home,
		Work,
		Portfolio,
		Blog
	},
};
</script>

<style lang="scss">
	@import './resources/assets/sass/variables';
	@import './resources/assets/sass/default';
</style>
