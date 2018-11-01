<template>
<section class="p-4">
	<div class="mb-1 text-muted">
		{{ details.start | moment("MMMM YYYY") }}
		-
		<span v-if='details.end'>
			{{ details.end | moment("MMMM YYYY") }}
		</span>
		<span v-if='!details.end'>
			present
		</span>
	</div>
	<h1 class="mb-2 h4">{{details.company}}</h1>
	<h2 class="mb-4 h5">{{details.role}}</h2>
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
