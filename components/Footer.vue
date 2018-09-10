<template>
<section id="footer" class="bg-dark">
    <div class="container py-4">
        <div class="row">
            <div class="col text-center text-white">
              <Contact/>
              <span class="copy-text">Made with hours of frustration and even more hours of fun, by stanrogo. | Copyright 2018 - stanrogo</span>
            </div>
        </div>
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
  .copy-text{
    display: block;
    margin-top: 1rem;
  }
}
</style>

