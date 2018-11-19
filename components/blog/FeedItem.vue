<template>
    <div class="feed-item">
        <hr/>
        <h1 class="h4">{{post.title}}</h1>
        <hr/>
        <Date :date="post.date"/>
        <Tags :tags="post.tags"/>
        <div v-if="post.content" class="mb-4">{{ post.content.substr(0, 500) + '...' }}</div>
        <router-link class="" :to="'/blog/' + post.cleanUrl" >Read More</router-link>
    </div>
</template>

<script>
    import Tags from "./Tags";
    import Date from "./Date";
    export default {
        name: 'FeedItem',
        components: {Date, Tags},
        props: [
          'post'
        ],
    };
</script>

<style lang="scss">
    @import '~assets/scss/variables';

    .feed-item{
        .post-heading{
            position: relative;
            z-index: $first-floor;
            width: 100%;
        }

        .button--read-more{
            background-color: $color--accent;
            color: $color--white;
        }

        .post-link{
            &:hover{
                text-decoration: none;
            }
        }
    }
</style>
