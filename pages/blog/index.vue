<template>
<section id="blog" class="">
	<Hero/>
	<div class="bg-white">
        <div class="container p-4">
            <div class="row">
                <section class="mb-4 post-container post-link col-xs-12" :key="post.id"  v-for="post in posts" >
                    <hr/>
                    <h1 class="h4">{{post.title}}</h1>
                    <hr/>
                    <div class="quick-fact mb-2">
                        <span class="lnr lnr-clock"></span>
                        {{ post.date | moment("dddd MMMM D YYYY") }}
                    </div>
                    <div class="quick-fact mb-4">
                        <span class="lnr lnr-tag"></span>
                        <div class="tag" v-for="tag in post.tags" :key="tag.id">
                            {{tag}}
                        </div>
                    </div>
                    <div v-if="post.content" class="mb-4">{{ post.content.substr(0, 500) + '...' }}</div>
                    <router-link class="" :to="'/blog/' + post.cleanUrl" >Read More</router-link>
                </section>
            </div>
        </div>
	</div>
</section>
</template>

<script>
import Hero from '~/components/blog/Hero.vue';

export default {
	name: 'Blog',
	components: {
		Hero,
	},
	asyncComputed: {
		async posts() {
			const entries = await this.$contentful.getEntries({
                'content_type': 'blogPost',
                'order': '-fields.date',
			});
			return entries.items.map(x => x.fields);
		},
		async otherPosts() {
			const entries = await this.posts;
			return entries ? entries.slice(1) : entries;
		}
	},
};
</script>

<style lang="scss" scoped>
@import './assets/scss/variables';

$header-height: 300px;
$card-height: 400px;

#blog{
	.post-heading{
		position: relative;
		z-index: $first-floor;
		width: 100%;
	}

	.button--read-more{
		background-color: $color--accent;
		color: $color--white;
	}

	.tag{
		display: inline;
	}

	.post-link{
	  &:hover{
		text-decoration: none;
	  }
	}
}
</style>
