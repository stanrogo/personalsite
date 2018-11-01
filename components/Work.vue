<template>
<section id="work" class="py-4">
	<div class="container">
		<div class="row">
			<div class="col">
				<h1 class="section-heading">This is where I've worked</h1>
				<hr/>
				<div class="row">
					<div class="col-lg-6 col-sm-12 my--md-3 my-2 job-wrapper" v-for="job in work" :key="job.id">
						<job :details="job" class="h-100 job"/>
					</div>
				</div>
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
    props: [
        'work',
    ],
};
</script>

<style lang="scss">
#work{
	background: #505393;

	.job-wrapper{
		&:nth-child(1) .job{
			background: rgba(0, 0, 0, 0.035);
		}
		&:nth-child(2) .job{
			background: rgba(0, 0, 0, 0.07);
		}
		&:nth-child(3) .job{
			background: rgba(0, 0, 0, 0.105);
		}
		&:nth-child(4) .job{
			background: rgba(0, 0, 0, 0.14);
		}
	}
}
</style>
