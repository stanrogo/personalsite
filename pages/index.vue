<template>
  <div id="home" class="row flex-column">
    <hero class="col-12"/>
    <description class="col-12"/>
    <work class="col-12"/>
    <portfolio class="col-12"/>
    <post-widget class="col-12"/>
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue';
import Description from '~/components/Description.vue';
import Work from '~/components/Work.vue';
import Portfolio from '~/components/Portfolio/Portfolio.vue';
import PostWidget from '~/components/PostWidget.vue'

export default {
	name: 'App',
	components: {
		Hero,
    Description,
		Work,
		Portfolio,
		PostWidget,
	},
};
</script>
