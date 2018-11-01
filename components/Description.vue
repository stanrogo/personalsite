<template>
  <section id="description" class="align-items-center py-4 text-white">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="section-heading text-center">What do I do?</h1>
          <hr/>
          <div v-if="description">
            <vue-markdown>{{description}}</vue-markdown>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import VueMarkdown from 'vue-markdown';

  export default {
    name: 'Description',
    components: {
      VueMarkdown,
    },
    asyncComputed: {
      async description() {
        const entries = await this.$contentful.getEntries({
          'content_type': 'introduction',
        });
        return entries.items[0].fields.description;
      },
    },
  };
</script>

<style lang="scss">
  @import './assets/scss/variables';

  #description{
    background: #455A64;
  }
</style>
