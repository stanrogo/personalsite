<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">

    <section id="hero" class="material-card">
        <figure class="profile-figure">
            <img class="profile-image" :src="imgUrl('v1492008891/me_zzydtk.jpg')">
        </figure>

        <div class="hero-content-wrapper">
            <h1 class="hero-title">I'm <strong>STANLEY CLARK</strong></h1>
            <h2 class="hero-subtitle">Front end developer and student, Eindhoven</h2>
            <button class="button button--resume-download button--resume-download-mobile">Download My Resume!</button>
            <div class="intro-wrapper">
                <p>
                    I'm Stanley Clark. I love to focus on the expanding frontier of
                    web development. I'm interested in all things front end, including
                    using webpack, angular2, react, npm, and lots more. Not limiting
                    myself to just pure technologies I see the importance of proper
                    SEO for web sites and the importance of conversion rates vs
                    user satisfaction balance on any website.
                </p>
                <p>
                    Currently I am busy with expanding my knowledge by participating
                    in a master's degree at the Eindhoven University of Technology in
                    Computer Science and Engineering with a focus on Web Science. The
                    degree fits perfectly into my background of wanting to be more
                    design focussed and user centric even while having a technical
                    background.
                </p>
                <p>
                    This area of focus is a great advantage in my work as a front end
                    web developer for StudyPortals. I work on a high traffic website
                    in a search team and used to be a scrum master before starting my studies again,
                    thus I have always enhanced my knowledge with the help of my team mates
                    and continue to do so. Here I can also implement important
                    enhancements, most recently a visual regression test setup as part
                    of our continuous deployment process.
                </p>
            </div>
            <button class="button button--resume-download button--resume-download-desktop">Download My Resume!</button>
        </div>
    </section>

</template>

<script>
    import variables from '../variables.js';

    export default {
        name: 'hero',
        data () {
            return {
                links: [
                    {name: 'LinkedIn', href: 'https://www.linkedin.com/in/stanleyclark'},
                    {name: 'Twitter', href: 'https://www.twitter.com/stanrogo'},
                    {name: 'Email', href: 'mailto:me@stanrogo.com?Subject=I%20Want%20To%20Ask%20You%20Something!'}
                ]
            }
        },
        methods: {
            toggleMenu: function() {

                this.hamburgerActive = !this.hamburgerActive;
            },
            imgUrl: function(image){

                return variables.imageBaseURLStripped + image;
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">

    @import '../../styles/general';

    #hero{
        @include flexbox();
        @include align-items(center);
        @include flex-direction(column);
        padding: 0;

        @include breakpoint(tablet){
            @include flex-direction(row);
        }

        .hero-content-wrapper{
            @include borderbox();
            padding: 1rem;

            @include breakpoint(tablet){
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

            @include breakpoint(tablet){
                height: 600px;
                width: 50%;
            }
        }

        .profile-image{
            @include position-center();
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
                @include breakpoint(tablet){
                    display: none;
                }
            }

            &.button--resume-download-desktop{
                display: none;

                @include breakpoint(tablet){
                    display: block;
                }
            }
        }
    }

</style>