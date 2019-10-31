<template>
	<Section id="work">
		<div class="row">
			<div v-for="job in work" :key="job.id" class="col-md-3 col-6 mb-4">
				<Item :item="job" />
			</div>
		</div>
	</Section>
</template>

<script>
import Item from './Item';

export default {
	name: 'Work',
	components: {
		Item,
	},
	props: {
		work: {
			type: Array,
			default: () => [],
		},
	},
};
</script>
