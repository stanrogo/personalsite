<template>
	<section id="hero" class="row">
		<div class="col text-center d-flex justify-content-center align-items-center flex-column">
			<h1 class="tag-line">
				I'm <strong>Stanley Clark</strong>, PhD Student and Teaching Assistant in <strong>Database Security</strong> at <strong>TU Eindhoven</strong>
			</h1>
			<a href="cv_s_clark.pdf" target="_blank" class="btn btn-dark my-4">Download My Resume!</a>
		</div>
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
		background-image: url("/images/background_new.jpg");
		background-size: cover;
		background-position: top;

		.tag-line{
			font-size: 2rem;
			max-width: 50rem;
		}
    }
</style>
