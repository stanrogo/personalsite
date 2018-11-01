<template>
<section id="post-widget" class="py-4">
	<div class="container">
        <h1 class="section-heading">I Blog</h1>
        <hr/>
		<div class="post-container" v-for="post in posts" :key="post.id" :style="`background: url('${post.coverImage.fields.file.url}')`">
			<router-link :to="'/blog/' + post.cleanUrl" class="post row text-white">
				<div class="col-md-8 col-xs-12 justify-content-center d-flex flex-column">
					<div class="post-text px-4 h-100 d-flex flex-column justify-content-center">
						<h1 class="h4 text-uppercase text-primary">{{post.title}}</h1>
						<div v-if="post.content">{{ post.content.substr(0, 150) + '...' }}</div>
					</div>
				</div>
			</router-link>
		</div>
	</div>
</section>
</template>

<script>

export default {
	name: 'PostWidget',
	props: [
		'posts',
	],
};
</script>

<style lang="scss">
@import '~assets/scss/variables';

#post-widget{
	background: #2e3842;

	.post-text{
		background: $color--accent--hover;
	}

	.post-container{
		&:nth-child(2n){
			.post{
				flex-direction: row-reverse;
			}

			.post-text{
				background: $color--accent;
			}
		}
	}

	.post{
		height: 15rem;
		transition: opacity 0.3s;
		cursor: pointer;

		&:hover{
            opacity: 0.9;
            text-decoration: none;
		}
	}
}
</style>

