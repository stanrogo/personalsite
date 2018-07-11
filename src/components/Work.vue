<template>
<section id="work" class="z-ground-floor">
    <a class="anchor" id="work--a"></a>
    <div class="container py-4">
        <div class="row material-card">
            <div class="col-12 my-4">
                <h1>This is where I've worked</h1>
            </div>
            <div class="col-12">
                <job v-for="job in work" :key="job.id" :details="job"></job>
            </div>
        </div>
    </div>
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
