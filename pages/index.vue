<template>
	<div id="home">
		<home/>
		<work/>
		<portfolio/>
	</div>
</template>

<script>
import Home from '~/components/Hero.vue';
import Work from '~/components/Work.vue';
import Portfolio from '~/components/Portfolio/Portfolio.vue';

export default {
	name: 'App',
	components: {
		Home,
		Work,
		Portfolio,
	},
};
</script>
