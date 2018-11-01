<template>
<section id="portfolio" class="py-4">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<h1 class="section-heading">I like to work on stuff</h1>
				<hr/>
			</div>
			<div class="col-md-6 col-xs-12">
				<item v-for="(entry, i) in projects" :key="entry.id" :entry="entry" :isActive="i === activePortfolioItem" @item-clicked="changeActivePortfolioItem(i)"></item>
			</div>
			<div class="col-md-6 col-xs-12">
				<div class="text-content p-4 h-100 material d-flex justify-content-between flex-column">
					<vue-markdown :source="projectDescription"/>
					<a :href="projectLink" target="_blank" class="view-github bg-accent text-white p-4 material">View it on GitHub</a>
				</div>
			</div>
		</div>
	</div>
</section>
</template>

<script>
import Item from './Item.vue';
import VueMarkdown from 'vue-markdown';
import { mapMutations, mapGetters } from 'vuex';

export default {
	name: 'Portfolio',
	data(){
		return {
			selected: null,
		};
	},
	props: [
		'projects'
	],
	computed: {
		...mapGetters([
			'activePortfolioItem',
		]),
		projectDescription(){
			return this.projects[this.activePortfolioItem].description;
		},
		projectLink(){
			return this.projects[this.activePortfolioItem].link;
		},
	},
	methods: {
		...mapMutations([
			'changeActivePortfolioItem',
		]),
	},
	components: {
		Item,
		VueMarkdown,
	},
};
</script>

<style lang="scss">
@import "~assets/scss/variables";

#portfolio{
    background: #21b2a6;

    .text-content{
        background: rgba(0, 0, 0, 0.1);
    }

    .view-github{
        transition: background-color 0.3s;
        text-decoration: none;

        &:hover{
            background: $color--accent--hover;
        }
    }
}
</style>
