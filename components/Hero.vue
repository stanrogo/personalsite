<template>
<section id="hero" class="container">
    <div class="row h-100 align-items-center">
        <div class="col text-center">
            <h1>I'm <strong>Stanley Clark</strong></h1>
            <h2>Front end web developer and student, Eindhoven</h2>
            <a href="cv-dutch.pdf" target="_blank" class="btn btn-accent my-4">
                Download My Resume!
            </a>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: 'Hero',
};
</script>

<style lang="scss">
@import '~assets/scss/variables';

#hero{
    height: calc(100vh - #{$navbar-height});
}
</style>
