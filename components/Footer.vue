<template>
	<section id="footer" class="row bg-main py-4">
		<div class="col d-flex flex-md-column flex-wrap text-center text-md-left">
			<div class="d-flex justify-content-between flex-column-reverse flex-md-row w-100">
				<span class="my-4 my-md-0 font-large">
					<strong>stanrogo.</strong> MSc
				</span>
				<Contact />
			</div>
			<div class="mb-2 mt-0 my-md-4 w-100 font-tiny">
				Copyright 2018 - 2020
			</div>
		</div>
	</section>
</template>

<script>
import Contact from './Contact.vue';

export default {
	name: 'Footer',
	components: {
		Contact,
	},
};
</script>
