<template>
  <section id="work" class="text-white py-4">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="section-heading">This is where I've worked</h1>
          <hr/>
          <div class="row px-3">
            <div class="col-lg-6 col-sm-12 job" v-for="job in work" :key="job.id">
              <job :details="job" class="h-100"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import Job from './Job.vue';

export default {
    name: 'Work',
    components: {
        Job,
    },
    asyncComputed: {
        async work() {
            const entries = await this.$contentful.getEntries({ 'content_type': 'work' });
            return entries.items.map(x => x.fields).sort((a, b) => {
                const startA = (new Date(a.start)).getTime();
                const startB = (new Date(b.start)).getTime();
                return startA < startB ? 1 : -1;
            });
        },
    },
};
</script>

<style lang="scss">
  #work{
    background: #505393;

    .job{
      &:nth-child(1){
        background: rgba(0, 0, 0, 0.035);
      }
      &:nth-child(2){
        background: rgba(0, 0, 0, 0.07);
      }
      &:nth-child(3){
        background: rgba(0, 0, 0, 0.105);
      }
      &:nth-child(4){
        background: rgba(0, 0, 0, 0.14);
      }
    }
  }
</style>
