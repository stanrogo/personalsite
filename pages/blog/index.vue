<template>
<section id="blog" class="my-4 px-4 py-4">
    <div class="row">
        <section class="col-8 my-4">
            <h1>The Blog</h1>
            <p>
              These are my thoughts, university adventures and life
              struggles which I just have to share.
            </p>
        </section>
        <section class="col-6">
            <div class="featured-post">
                <figure class="card-figure">
                    <img class="card-image" :src="posts ? posts[0].coverImage.fields.file.url: ''">
                </figure>
                <div class="px-4 py-4 featured-post--heading text-white">
                    <h2>Featured Article</h2>
                    <h1 class="h2 featured-article-name">
                        <span>{{posts ? posts[0].title : ""}}</span>
                    </h1>
                    <div class="my-2">
                        <router-link class="btn button--read-more" :to="posts ? '/blog/' +  posts[0].cleanUrl : ''">
                            Read more
                        </router-link>
                    </div>
                </div>
            </div>
        </section>
        <router-link class="post-link col-lg-3 col-md-6" v-for="post in otherPosts" :key="post.id" :to="'/blog/' + post.cleanUrl">
            <section class="mb-4 text-white post-container">
                <figure class="card-figure">
                    <img class="card-image" v-if="post.thumbnailImage"
                            :src="post.thumbnailImage.fields.file.url">
                    <img class="card-image" v-if="!post.thumbnailImage"
                            :src="post.coverImage.fields.file.url">
                </figure>
                <div class="post-heading mt-4 px-4 py-4 mb-auto">
                    <div class="quick-fact">
                        <span class="lnr lnr-clock"></span>
                        {{ post.date | moment("dddd MMMM D YYYY") }}
                    </div>
                    <div class="quick-fact">
                        <span class="lnr lnr-tag"></span>
                        <div class="tag" v-for="tag in post.tags" :key="tag.id">
                            {{tag}}
                        </div>
                    </div>
                    <h1 class="h4">{{post.title}}</h1>
                </div>
            </section>
        </router-link>
    </div>
</section>
</template>

<script>

export default {
    name: 'Blog',
    asyncComputed: {
        async posts() {
            const entries = await this.$contentful.getEntries({
                'content_type': 'blogPost',
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
    background: white;
    .featured-post{
        position: relative;
        height: $card-height;
        overflow: hidden;

        .featured-post--heading{
            position: relative;
            z-index: $first-floor;
        }

        .featured-article-name{
            display: inline;
            text-transform: uppercase;

            span{
                padding: 0.2rem;
                box-shadow: 0.2rem 0 0 rgba($color--text-primary,0.7),
                            -0.2rem 0 0 rgba($color--text-primary,0.7);
                background-color: rgba($color--text-primary,0.7);
            }
        }

        .card-figure{
            position: absolute;
            left: 0;
            right: 0;
            height: $card-height;
            z-index: $ground-floor;
            width: 100%;
            margin: 0;
            padding: 0;
            overflow: hidden;

            .card-image{
                @include position-center();
                height: auto;
            }
        }

        .button--read-more{
            @include material-shadow();
        }
    }

    .post-container{
        position: relative;
        display: flex;
        height: $card-height;
        overflow: hidden;

         .card-figure{
            position: absolute;
            height: $card-height;
            width: 100%;
            margin: 0;
            padding: 0;
            overflow: hidden;
            z-index: $ground-floor;

            .card-image{
                @include position-center();
                filter: grayscale(100%);
                transition: all 0.3s;
            }
        }
    }

    .post-heading{
        position: relative;
        z-index: $first-floor;
        width: 100%;
        background-color: rgba($color--text-primary, 0.8);
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

        .card-image{
          transform: translate(-50%, -50%) scale(1.1, 1.1);
          filter: grayscale(0%);
        }
      }
    }
}
</style>
