<template>
<Section id="work" name="This is where I've worked">
    <template slot="section-content">
        <div class="row">
            <div class="col-lg-6 col-sm-12 my--md-3 my-2 job-wrapper" v-for="job in work" :key="job.id">
                <Job :details="job" class="h-100 job"/>
            </div>
        </div>
    </template>
</Section>
</template>

<script>
import Job from './Job.vue';
import Section from './Section';

export default {
	name: 'Work',
	components: {
		Job,
        Section,
    },
    props: [
        'work',
    ],
};
</script>

<style lang="scss">
#work{
	background: #313335;

	.job-wrapper .job{
        background: rgba(0, 0, 0, 0.14);
	}
}
</style>
