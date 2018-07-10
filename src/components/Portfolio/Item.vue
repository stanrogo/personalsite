<template>
<div class="col-12 py-4 my-1 portfolio-item">
    <h1 class="h5">{{entry.title}} - {{entry.type}}</h1>
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

<style lang="scss" scoped>
	@import './resources/assets/sass/variables';

    .portfolio-item{
        background: #ededed;
        border-radius: 0.25rem;
        cursor: pointer;
        @include material-shadow();

        &:hover{
            @include material-shadow();
        }
    }

    .description{
        height: 3rem;
        overflow: hidden;
    }
</style>
