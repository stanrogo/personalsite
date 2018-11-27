<template>
	<article v-if="article" id="post">
		<div class="cover-wrapper">
			<img :src="article.coverImage && article.coverImage.fields.file.url" class="cover">
			<div class="cover--title">
				<h1><span>{{ article.title }}</span></h1>
				<h2 class="PostAuthor"><span>By Stanley Clark</span></h2>
			</div>
		</div>

		<div class="row justify-content-center">
			<div class="col-lg-8 col-12">
				<div class="my-4 post-content">
					<div class="row">
						<div class="col-12 mb-4 TagContainer">
							<span class="categories">
								<span class="lnr lnr-tag"/>
								<span v-for="tag in article.tags" :key="tag.id" class="Tag">
									{{ tag }}
								</span>
							</span>
							<span class="timing">
								<span class="lnr lnr-clock"/>
								<span class="Tag">
									{{ article.date | moment("MMMM YYYY") }}
								</span>
							</span>
						</div>

						<div class="col-12 article-content">
							<vue-markdown v-if="article.introduction">{{ article.introduction }}</vue-markdown>
							<hr>
							<vue-markdown>{{ article.content }}</vue-markdown>
						</div>
						<div class="col-12">
							<vue-disqus :identifier="id" :url="'https://stanrogo.com/' + $route.path" shortname="stanrogo"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</article>
</template>

<script>
export default {
	name: 'Post',
	computed: {
		id() {
			return this.$route.params.id;
		},
	},
	async asyncData ({ app, params, }) {
		const entries = await app.$contentful.getEntries({
			'content_type': 'blogPost',
			'fields.cleanUrl': params.id,
		});
		return {
			article: entries.items[0] ? entries.items[0].fields : {},
		};
	},
	mounted() {
		/* global hljs */
		hljs.initHighlightingOnLoad();
	},
};
</script>

<style lang="scss">
	@import './assets/scss/variables';

	#post{
		position: relative;
		background: white;

		// resets

		ul{
			list-style-type:disc;
			margin-left: 1rem;
		}

		img{max-width: 100%;}

		.cover-wrapper{
			position: relative;
			height: 300px;
			overflow: hidden;
			background-color: $color--grey-light;

			@include breakpoint(tablet){
				height: $hero-height;
			}

			.cover{
				max-width: 1920px;
				min-height: 100%;
				@include position-center();

				@include breakpoint(tablet){
					min-width: 1920px;
				}
			}

			.cover--title{
				box-sizing: border-box;
				display: flex;
				flex-direction: column;
				align-items: center;
				@include position-center();
				color: $color--white;
				text-transform: uppercase;
				width: 100%;
				padding: 1rem;
				text-align: center;

				h2, h1{
					display: inline;
					margin: 0;
					text-transform: uppercase;

					span{
						padding: 0.2rem;
						box-shadow: 0.2rem 0 0 rgba($color--text-primary,0.7), -0.2rem 0 0 rgba($color--text-primary,0.7);
						background-color: rgba($color--text-primary,0.7);
					}
				}
			}

			.PostAuthor{
				font-size: 1.2rem;
			}
		}

		.button {
			position: absolute;
			padding: 0.5rem 1rem;
			top: 0;

			&:before {
				padding-right: 0.5rem;
			}

			.ArrowLeft{
				padding-right: 0.5rem;
			}
		}

		.TagContainer{
			display: flex;
			flex-wrap: wrap;
			color: $color--grey-dark;

			.Tag{
				display: inline-block;
				margin: 0 0.5rem 1rem 0;
				padding: 0.25rem 0.5rem;
				background: $color--grey-light;
			}

			.categories{
				margin-right: 1rem;
			}

			.lnr{
				margin-right: 0.5rem;
			}
		}

		.grid-container{
			flex-direction: column;
		}

		.lead-letter{
			float: left;
			font-size: 3rem;
			padding-right: 1rem;
		}

		blockquote {
			background: #f9f9f9;
			border-left: 10px solid #ccc;
			margin: 1.5em 0;
			padding: 0.5em 10px;

			&:before{
				color: #ccc;
				content: open-quote;
				font-size: 4em;
				line-height: 0.1em;
				margin-right: 0.25em;
				vertical-align: -0.4em;
			}

			p{
				display: inline;
			}
		}

		.article-content{
			h1, h2, h3 {
				margin-top: 4rem;
				margin-bottom: 2rem;
			}
			h1{font-size: 2rem !important;}
			h2{font-size: 1.75rem !important;}
			img{margin: 2rem 0;}
		}
	}
</style>
