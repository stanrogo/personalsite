<template>
	<div id="home">
		<home></home>
		<work></work>
		<portfolio></portfolio>
		<blog></blog>
	</div>
</template>

<script>

import Home from '../components/Hero.vue';
import Work from '../components/Work.vue';
import Portfolio from '../components/Portfolio/Portfolio.vue';
import Blog from '../components/Blog.vue';

export default {
	name: 'App',
	components: {
		Home,
		Work,
		Portfolio,
		Blog,
	},
};
</script>

<style lang="scss">
	@import './resources/assets/sass/variables';
	@import './resources/assets/sass/default';

	#app{
		background: black;
	}
</style>
