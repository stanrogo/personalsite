<template>
	<section id="hero" class="text-center d-flex justify-content-center align-items-center flex-column">
		<h1 class="tag-line">
			I'm <strong>Stanley Clark</strong>, PhD Student and Teaching Assistant in <strong>Database Security</strong> at <strong>TU Eindhoven</strong>
		</h1>
		<a href="cv_s_clark.pdf" target="_blank" class="btn btn-dark my-4">Download My Resume!</a>
	</section>
</template>

<script>
export default {
	name: 'Hero',
};
</script>

<style lang="scss">
    #hero {
        height: 25rem;

		.tag-line{
			font-size: 2rem;
			max-width: 50rem;
		}
    }
</style>
