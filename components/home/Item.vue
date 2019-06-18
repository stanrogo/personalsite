<template>
	<div class="portfolio-item text-center d-flex flex-column">
		<router-link :to="'/' + item.type + '/' + item.link + '/'" tag="figure" class="portfolio-item--figure bg-main">
			<picture v-if="item.img">
				<source :srcset="item.img + '?w=350&h=350&fit=crop&fm=jpg&fl=progressive'" media="(min-width: 1200px)">
				<source :srcset="item.img + '?w=290&h=290&fit=crop&fm=jpg&fl=progressive'" media="(min-width: 992px)">
				<source :srcset="item.img + '?w=210&h=210&fit=crop&fm=jpg&fl=progressive'" media="(min-width: 768px)">
				<img :src="item.img + '?w=240&h=240&fit=crop&fm=jpg&fl=progressive'" class="portfolio-item--image">
			</picture>
		</router-link>
		<div>{{ item.name }}</div>
		<div class="text-secondary">{{ item.sub }}</div>
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
</style>
