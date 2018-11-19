<template>
<Section id="description" name="What do I do?">
    <vue-markdown slot="section-content">{{description}}</vue-markdown>
</Section>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import Section from './Section';

export default {
    name: 'Description',
    components: {
        Section,
        VueMarkdown,
    },
    props: [
        'description',
    ],
};
</script>

<style lang="scss">
@import '~assets/scss/variables';
#description{
    background: $color--accent;

}
</style>
