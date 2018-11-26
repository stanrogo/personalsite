<template>
<Section id="work">
    <div class="row">
        <div class="col-md-4 col-6 mb-4" v-for="job in work" :key="job.id">
            <Item :item="job"/>
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
    props: [
        'work',
    ],
};
</script>
