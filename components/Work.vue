<template>
<section id="work" class="z-ground-floor material-card mb-4">
    <h1 class="section-heading">This is where I've worked</h1>
    <job v-for="job in work" :key="job.id" :details="job"/>
</section>
</template>

<script>

import Job from './Job.vue';

export default {
    name: 'Work',
    components: {
        Job,
    },
    asyncComputed: {
        async work() {
            const entries = await this.$contentful.getEntries({ 'content_type': 'work' });
            return entries.items.map(x => x.fields).sort((a, b) => {
                const startA = (new Date(a.start)).getTime();
                const startB = (new Date(b.start)).getTime();
                return startA < startB ? 1 : -1;
            });
        },
    },
};
</script>
