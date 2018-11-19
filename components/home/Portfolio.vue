<template>
<Section id="portfolio" name="I like to work on stuff">
    <template slot="section-content">
        <div class="row">
            <div v-for="(entry) in projects" :key="entry.id"
                 class="col-lg-6 col-xs-12 d-flex align-items-center my-2">
                <font-awesome-icon class="item--icon" :icon="['fas', entry.icon]" />
                <div class="px-4">
                    <a :href="entry.link" target="_blank" class="item--link">{{entry.title}}</a>
                    <vue-markdown :source="entry.description.substr(0, 200) + '...'"/>
                </div>
            </div>
        </div>
    </template>
</Section>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faProjectDiagram, faBook, faFile, faDatabase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Section from "./Section";

library.add(faEdit);
library.add(faProjectDiagram);
library.add(faBook);
library.add(faFile);
library.add(faDatabase);

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
	components: {
        Section,
		VueMarkdown,
        FontAwesomeIcon,
	},
};
</script>

<style lang="scss">
@import "~assets/scss/variables";

#portfolio{
    background: $color--accent;

    .item--link{
        font-size: 1.5rem;
    }

    .item--icon{
        font-size: 2.5rem;
        width: 3rem;
    }
}
</style>
