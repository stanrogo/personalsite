<template>
	<div id="home">
		<div class="row">
			<div class="col-12">
				<hero/>
			</div>
			<div class="col-md-8 col-sm-12">
				<work/>
				<portfolio/>
			</div>
			<div class="col-md-4 col-sm-12">
				<post-widget/>
			</div>
		</div>
	</div>
</template>

<script>
import Hero from '~/components/Hero.vue';
import Work from '~/components/Work.vue';
import Portfolio from '~/components/Portfolio/Portfolio.vue';
import PostWidget from '~/components/PostWidget.vue'

export default {
	name: 'App',
	components: {
		Hero,
		Work,
		Portfolio,
		PostWidget,
	},
};
</script>
