<template>
	<div class="date my-2">
		<font-awesome-icon :icon="['fas', 'clock']" class="tags-icon"/>
		<span>{{ date | moment("dddd MMMM D, YYYY") }}</span>
	</div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faClock);

export default {
	name: 'Date',
	components: {
		FontAwesomeIcon,
	},
	props: {
		data: {
			type: String,
			default: '',
		},
	},
};
</script>

<style lang="scss">
    .date{
        .tags-icon{
            margin-right: 1rem;
        }
    }
</style>

