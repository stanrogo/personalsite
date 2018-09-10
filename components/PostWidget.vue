<template>
<section id="post-widget" class="material-card">
    <h1 class="section-heading">Recent Blog Posts</h1>
    <div v-for="post in posts" :key="post.id" class="mt-2">
        <h1 class="h6"><router-link :to="'/blog/' + post.cleanUrl">{{post.title}}</router-link></h1>
        <hr/>
    </div>
</section>
</template>

<script>

export default {
    name: 'PostWidget',
    asyncComputed: {
        async posts() {
            const entries = await this.$contentful.getEntries({
                'content_type': 'blogPost',
            });
            return entries.items.map(x => x.fields);
        }
    },
};
</script>

<style lang="scss" scoped>
@import './assets/scss/variables';

</style>

