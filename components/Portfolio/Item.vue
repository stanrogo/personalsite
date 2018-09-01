<template>
<div class="col-12 py-4 my-1 portfolio-item" :class="{'is-active': isActive}" @click="$emit('item-clicked')">
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
        border-radius: 0.25rem;
        cursor: pointer;
        @include material-shadow();

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
