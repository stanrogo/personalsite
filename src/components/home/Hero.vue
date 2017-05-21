<template>

    <section id="hero" class="material-card">
        <figure class="profile-figure">
            <img class="profile-image" :src="constructImageUrl('me.jpg')">
        </figure>

        <div class="hero-content-wrapper">
            <h1 class="hero-title">I'm <strong>{{stanley.name}}</strong></h1>
            <h2 class="hero-subtitle">{{stanley.profession}}, {{stanley.location}}</h2>
            <button class="button button--resume-download button--resume-download-mobile">Download My Resume!</button>
            <div class="intro-wrapper" v-html="stanley.intro"></div>
            <button class="button button--resume-download button--resume-download-desktop">Download My Resume!</button>
        </div>
    </section>

</template>

<script>

    export default {
        name: 'hero'
    }

</script>

<style rel="stylesheet/scss" lang="scss">

    @import '../../styles/general';

    #hero{
        @include flexbox();
        @include align-items(center);
        @include flex-direction(column);
        padding: 0;

        @include breakpoint(laptop){
            @include flex-direction(row);
        }

        .hero-content-wrapper{
            @include borderbox();
            padding: 1rem;

            @include breakpoint(laptop){
                width: 50%;
                padding: 2rem;
            }
        }

        .profile-figure{
            position: relative;
            margin: 0;
            overflow: hidden;
            height: 200px;
            width: 100%;

            @include breakpoint(laptop){
                height: 600px;
                width: 50%;
            }
        }

        .profile-image{
            @include position-center();
            width: 100%;
        }

        .hero-title{
            font-size: 4rem;
        }

        .hero-subtitle{
            font-size: 2rem;
        }

        .hero-title, .hero-subtitle{
            margin-bottom: 0.5rem;
            margin-top: 0.5rem;
        }

        .button--resume-download{
            margin: 1rem 0;
            background: $color--accent;
            color: $color--white;

            &.button--resume-download-mobile{
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