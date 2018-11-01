<template>
<section id="footer" class="row py-4">
  <div class="col text-center text-white">
    <Contact/>
    <span class="copy-text">Made with hours of frustration and even more hours of fun, by stanrogo. | Copyright 2018 - stanrogo</span>
  </div>
</section>
</template>

<script>
import Contact from './Contact.vue';

export default {
  name: 'Footer',
  components: {
    Contact,
  },
};
</script>

<style lang="scss">
#footer{
  background: rgba(29, 36, 42, 0.9);
  .copy-text{
    display: block;
    margin-top: 1rem;
  }
}
</style>

