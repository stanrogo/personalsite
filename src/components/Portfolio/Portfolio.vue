<template>
<section id="portfolio">
    <div class="back-panel"></div>
    <a class="anchor" id="portfolio--a"></a>
    <div class="container py-4">
        <div class="row material-card">
            <div class="col">
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
                    <div class="col-6">
                        <div class="row">
                            <item v-for="entry in projects" :key="entry.id" :entry="entry"></item>
                            <item :entry="{title: 'Browser Based File Line Reader', type: 'npm package'}"></item>
                            <item :entry="{title: 'Browser Based graph database', type: 'javascript'}"></item>
                            <item :entry="{title: 'Code Generator from UML', type: 'javascript'}"></item>
                        </div>
                    </div>
                    <div class="col-6">
                        <vue-markdown class="description py-4 px-4">{{projects[0].description}}</vue-markdown>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import Item from './Item.vue';
import VueMarkdown from 'vue-markdown';

export default {
    name: 'Portoflio',
    data(){
        return {
            selected: null,
        };
    },
    components: {
        Item,
        VueMarkdown,
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
        @include material-shadow();
        border-radius: 0.25rem;
    }

    .portfolio-item:nth-child(2){
        color: $color--accent;
        border-left: 0.25rem solid $color--accent;
    }
}
</style>

