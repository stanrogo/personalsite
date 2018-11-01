<template>
<section class="work-card p-4">
    <div class="work-dates mb-1 text-muted">
        {{ details.start | moment("MMMM YYYY") }}
        -
        <span v-if='details.end'>
            {{ details.end | moment("MMMM YYYY") }}
        </span>
        <span v-if='!details.end'>
            present
        </span>
    </div>
    <h1 class="work-company mb-2 h4">{{details.company}}</h1>
    <h2 class="work-position mb-4 h5">{{details.role}}</h2>
    <div>{{details.description}}</div>
</section>
</template>

<script>

export default {
    name: 'Job',
    props: [
        'details',
    ],
};
</script>

<style lang="scss" scoped>
@import './assets/scss/variables';
</style>

