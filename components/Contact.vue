<template>
    <section id="contact" class="d-flex align-items-center justify-content-center flex-wrap">
        <a class="contact-link" target="_blank" href="https://twitter.com/stanrogo">Twitter</a>
        <a class="contact-link" target="_blank" href="https://nl.linkedin.com/in/stanleyclark">LinkedIn</a>
        <a class="contact-link"
           href="mailto:me@stanrogo.com?Subject=Hey%20Stanley%20!%20I%20was%20looking%20for%20me%20information"
           target="_top">Email</a>
        <a class="contact-link" target="_blank" href="tel:+31647051992">Phone</a>
    </section>
</template>

<script>
    export default {
        name: 'Contact',
    };
</script>

<style lang="scss">
    @import './assets/scss/variables';

    #contact {
        .contact-link {
            padding: 0 1rem 1rem;
            color: #212121;
            font-size: 13px;
            text-transform: uppercase;

            &:hover {
                color: #767676;
                text-decoration: none;
            }
        }
    }
</style>
