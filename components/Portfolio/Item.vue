<template>
<div class="portfolio-item py-4 px-2 my-1" :class="{'is-active': isActive}" @click="$emit('item-clicked')">
    <h1 class="h5">{{entry.title}} - {{entry.type}}</h1>
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
	@import './assets/scss/variables';

    .portfolio-item{
        background: #ededed;
        cursor: pointer;
        @include material-shadow();
        border-left: 0.25rem solid transparent;

        &:hover{
            @include material-shadow();
        }
    }

    .description{
        height: 3rem;
        overflow: hidden;
    }

	.is-active{
		color: $color--accent;
		border-left: 0.25rem solid $color--accent;
	}
</style>
