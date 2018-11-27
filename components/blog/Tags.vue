<template>
	<div class="tags my-2">
		<font-awesome-icon :icon="['fas', 'tags']" class="tags-icon"/>
		<span v-for="tag in tags" :key="tag.id" class="Tag">
			{{ tag }}
		</span>
	</div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faTags);

export default {
	name: 'Tags',
	components: {
		FontAwesomeIcon,
	},
	props: {
		tags: {
			type: Object,
			default: () => {},
		},
	},
};
</script>

<style lang="scss">
    .tags{
        .tags-icon {
            margin-right: 0.5rem;
        }

        .Tag{
            display: inline-block;
            margin: 0 0.5rem 1rem 0;
            padding: 0.25rem 0.5rem;
            background: #F6F6F6;
        }
    }
</style>

