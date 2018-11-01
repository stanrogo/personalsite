<template>
<div class="portfolio-item material px-4 mb-2 bg-white d-flex align-items-center"
    :class="{'is-active text-accent': isActive, 'text-dark': !isActive}"
    @click="$emit('item-clicked')">
	<h1 class="h5 m-0">{{entry.title}} - {{entry.type}}</h1>
</div>
</template>

<script>
import VueMarkdown from 'vue-markdown';

export default {
	name: 'Item',
	components: {
		VueMarkdown,
	},
	props: [
		'entry',
		'isActive',
	],
};
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables';

.portfolio-item{
    height: 5rem;
	cursor: pointer;
	border-left: 0.5rem solid transparent;

	&:hover{
		color: $color--accent;
    }

    &.is-active{
	    border-left-color: $color--accent;
    }
}
</style>
