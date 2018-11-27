<template>
	<div class="portfolio-item text-center d-flex flex-column">
		<router-link :to="'/' + item.type + '/' + item.link + '/'" tag="figure" class="portfolio-item--figure">
			<img v-if="item.img" :src="item.img + '?w=350&h=350&fit=crop&fm=jpg&fl=progressive'" class="portfolio-item--image">
		</router-link>
		<div>{{ item.name }}</div>
		<div class="portfolio-item--sub">{{ item.sub }}</div>
	</div>
</template>

<script>
export default {
	name: 'Item',
	props: {
		item: {
			type: Object,
			default: () => {},
		},
	},
};
</script>

<style lang="scss">
    .portfolio-item--figure {
        position: relative;
        padding-top: 100%;
        background: #F6F6F6;
        overflow: hidden;
        transition: opacity 0.3s;

        &:hover {
            opacity: 0.75;
            cursor: pointer;
        }
    }

    .portfolio-item--image {
        height: 100%;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
    }

    .portfolio-item--sub {
        color: #767676;
    }
</style>
