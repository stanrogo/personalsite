<template>
<section id="description" class="py-4">
    <div class="container">
        <div class="row">
            <div class="col">
                <h1 class="section-heading text-center">What do I do?</h1>
                <hr/>
                <vue-markdown>{{description}}</vue-markdown>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import VueMarkdown from 'vue-markdown';

export default {
    name: 'Description',
    components: {
        VueMarkdown,
    },
    props: [
        'description',
    ],
};
</script>

<style lang="scss">
#description{
    background: #455A64;
}
</style>
