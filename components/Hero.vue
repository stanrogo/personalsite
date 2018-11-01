<template>
  <section id="hero" class="text-white justify-content-center text-center d-flex flex-column">
    <h1>I'm <strong>Stanley Clark</strong></h1>
    <h2>Front end web developer and student, Eindhoven</h2>
    <a href="cv-dutch.pdf" target="_blank" class="btn btn-primary my-4 align-self-center">
        Download My Resume!
    </a>
  </section>
</template>

<script>

export default {
    name: 'Hero',
};
</script>

<style lang="scss">
@import './assets/scss/variables';

#hero{
    height: calc(100vh - #{$navbar-height});
}
</style>
