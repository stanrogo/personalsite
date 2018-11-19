<template>
<div class="date my-2">
    <font-awesome-icon :icon="['fas', 'clock']" class="tags-icon"/>
    <span>{{ date | moment("dddd MMMM D YYYY") }}</span>
</div>
</template>

<script>
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { faClock } from '@fortawesome/free-solid-svg-icons'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

    library.add(faClock);

    export default {
        name: 'Date',
        props: [
            'date',
        ],
        components: {
            FontAwesomeIcon,
        },
    };
</script>

<style lang="scss">
    @import '~assets/scss/variables';

    .date{
        .tags-icon{
            margin-right: 1rem;
        }
    }
</style>

