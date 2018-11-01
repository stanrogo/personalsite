<template>
  <section id="post-widget" class="text-white py-4">
    <div class="container">
      <div class="row">
        <div class="col">
          <div v-for="post in posts" :key="post.id" class="post row" :style="`background: url('${post.coverImage.fields.file.url}')`">
            <div class="col-8 post-text justify-content-center d-flex flex-column">
              <h1 class="h3"><router-link :to="'/blog/' + post.cleanUrl">{{post.title}}</router-link></h1>
              <div v-if="post.content">{{post.content.substr(0, 200) + '...'}}</div>
            </div>
          </div>
        </div>
      </div>
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

  #post-widget{
    background: #2e3842;

    .post{
      height: 15rem;
      transition: opacity 0.3s;
      cursor: pointer;

      &:hover{
        opacity: 0.5;
      }

      &:nth-child(2n){
        flex-direction: row-reverse;
      }

      &:nth-child(1){
        .post-text{
          background: #2e3842;
        }

      }
      &:nth-child(2){
        .post-text{
          background: #2e3844;
        }
      }
      &:nth-child(3){
        .post-text{
          background: #2e3846;
        }
      }
      &:nth-child(4){
        .post-text{
          background: #2e3848;
        }
      }
      &:nth-child(5){
        .post-text{
          background: #2e384a;
        }
      }
      &:nth-child(6){
        .post-text{
          background: #2e384c;
        }
      }
    }
  }
</style>

