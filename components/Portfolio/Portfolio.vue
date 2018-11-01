<template>
  <section id="portfolio" class="py-4">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="section-heading text-center">I like to work on stuff</h1>
            <hr/>
          </div>
          <div class="col-md-6 col-xs-12">
            <div class="row">
              <div v-for="(entry, i) in projects" :key="entry.id" class="col-12">
                <item :entry="entry" :isActive="i === activePortfolioItem" @item-clicked="changeActivePortfolioItem(i)"></item>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xs-12">
            <div class="description py-4 px-4 h-100">
              <vue-markdown :source="projectDescription"></vue-markdown>
              <a :href="projectLink" target="_blank">View it on GitHub </a>
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
	computed: {
		...mapGetters([
			'activePortfolioItem',
		]),
		projectDescription(){
			return this.projects ? this.projects[this.activePortfolioItem].description : "";
		},
		projectLink(){
			return this.projects ? this.projects[this.activePortfolioItem].link : "";
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
    asyncComputed: {
        async projects() {
			    const entries = await this.$contentful.getEntries({'content_type': 'portfolio'});
			    return entries.items.map(x => x.fields);
        },
    },
};
</script>

<style lang="scss">
@import './assets/scss/variables';

#portfolio{
    background: #21b2a6;

    .back-panel{
        @include breakpoint(tablet){
            position: absolute;
            top: -5rem;
            bottom: 5rem;
            width: 100%;
            background-color: #252525;
        }
    }

    .container{
        position: relative;
        z-index: 25;
    }

    .description{
        background: white;
    }
}
</style>

