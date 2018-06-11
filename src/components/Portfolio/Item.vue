<template>
<div class="col-6">
    <h1>{{entry.title}} - {{entry.type}}</h1>
    <vue-markdown>{{ entry.description }}</vue-markdown>
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
    ],
};
</script>

<style lang="scss">
	@import './resources/assets/sass/variables';

</style>
