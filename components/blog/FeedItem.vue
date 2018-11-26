<template>
    <div class="feed-item">
        <h1 class="h4">{{post.title}}</h1>
        <Date :date="post.date"/>
        <Tags :tags="post.tags"/>
        <div v-if="post.content" class="mb-4">{{ post.content.substr(0, 500) + '...' }}</div>
        <router-link :to="'/blog/' + post.cleanUrl">Read More</router-link>
    </div>
</template>

<script>
    import Tags from './Tags';
    import Date from './Date';

    export default {
        name: 'FeedItem',
        components: {
            Date,
            Tags
        },
        props: [
            'post'
        ],
    };
</script>
