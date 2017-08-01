<template>

    <section id="hero" class="grid-container">
        <h1 class="hero-heading hero-title">I'm <strong>{{stanley.name}}</strong></h1>
        <h2 class="hero-heading hero-subtitle">{{stanley.profession}}, {{stanley.location}}</h2>
        <button class="button button--resume-download button--resume-download-mobile" v-on:click="downloadDocument('CV graphical.pdf')">Download My Resume!</button>
        <div class="intro-wrapper" v-html="stanley.intro"></div>
        <button class="button button--resume-download button--resume-download-desktop" v-on:click="downloadDocument('CV graphical.pdf')">Download My Resume!</button>
    </section>

</template>

<script>

    export default {
        name: 'hero',
        methods: {
            downloadCV: function(){

                downloadDocument('CV graphical.pdf');
            }
        }
    }

</script>

<style rel="stylesheet/scss" lang="scss">

    @import '../../styles/general';

    #hero{
        @include flex-direction(column);
        color: $color--white;

        .hero-title{
            font-size: 4rem;
        }

        .hero-subtitle{
            font-size: 2rem;
        }

        .hero-heading{
            margin: 0.5rem 0;
        }

        .button--resume-download{
            @include align-self(flex-start);
            margin: 1rem 0;
            background: $color--accent;
            color: $color--white;

            &.button--resume-download-mobile{
                display: block;

                @include breakpoint(laptop){
                    display: none;
                }
            }

            &.button--resume-download-desktop{
                display: none;

                @include breakpoint(laptop){
                    display: block;
                }
            }
        }
    }

</style>