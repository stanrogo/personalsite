<template>
<section id="portfolio">
    <div class="container py-4">
        <div class="row">
            <div class="col">
                <h1>These are my coding projects</h1>
                <p>
                    This portfolio features most of the work that I do in my spare
                    time, as well as at university. It is therefore a collection
                    of simple single page apps, dummy websites, blogs and in general
                    cool things that I have built based mostly on tutorials e.g.
                    build a clock using JavaScript.
                </p>
                <p>
                    Throughout my time at University I hope to grow this section
                    so that I can showcase the achievements that I make during my
                    studies, and I also hope to be able to upload any presentation
                    material that I produce for a few talks that I have done and
                    include them here as part of the portfolio.
                </p>
                <hr>
            </div>
        </div>
        <div class="row">
            <item v-for="entry in projects" :key="entry.id" :entry="entry"></item>
        </div>
    </div>
</section>
</template>

<script>
import Item from './item.vue';

export default {
    name: 'Portoflio',
    components: {
        Item,
    },
     asyncComputed: {
        async projects() {
            const entries = await this.$contentful.getEntries({ 'content_type': 'portolfio' });
            return entries.items.map(x => x.fields);
        },
    },
};
</script>

<style lang="scss">
@import './resources/assets/sass/variables';

#portfolio{
    position: relative;
    background-color: #dad6ca; 
}
</style>

