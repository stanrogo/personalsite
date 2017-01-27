<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">

    <section id="hero">
        <div class="hero-background"></div>

        <div class="grid-container">

            <header>
                <h1 class="hero-title">HI, I'M <strong>STANLEY CLARK</strong></h1>
                <h2 class="hero-subtitle">Front end developer and student, Eindhoven</h2>
            </header>

            <div class="material-card">
                <section class="intro-wrapper">
                    <img class="profile-image" src="../../assets/me3.jpg">
                    <div class="intro-text-wrapper">
                        <h1 class="about-me--title">ABOUT ME</h1>
                        <p class="hero-text">
                            I'm Stanley Clark. I love to focus on the expanding frontier of
                            web development. I'm interested in all things front end, including
                            using webpack, angular2, react, npm, and lots more. Not limiting
                            myself to just pure technologies I see the importance of proper
                            SEO for web sites and the importance of conversion rates vs
                            user satisfaction balance on any website.
                        </p>
                        <ul class="hero-text">
                            <li class="contact-link">Contact me on</li>
                            <li class="contact-link" v-for="link in links">
                                <a class="social-icon" target="_blank" :href="link.href">{{link.name}}</a>
                            </li>
                        </ul>
                    </div>
                </section>
                <section class="about-wrapper">
                    <h1 class="about-section-title">CURRENT FOCUS</h1>
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
                        in a search team as a scrum master, thus I always enhance my
                        knowledge with the help of my team mates and can implement important
                        enhancements, most recently a visual regression test setup as part
                        of our continuous deployment process.
                    </p>
                </section>
            </div>
        </div>
    </section>

</template>

<script>
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
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">

    @import '../../styles/general';

    #hero{
        position: relative;
        overflow: auto;

        .hero-background{
            position: fixed;
            top: 0;
            width: 100%;
            height: $hero-height;
            background: $color--white url("../../assets/diagonal.jpg") center;
        }

        .grid-container{
            @include flex-direction(column);
            margin-top: 2rem;
        }

        .intro-wrapper{
            @include flexbox();
            @include flex-direction(column);
            @include justify-content(center);
            @include align-items(flex-start);

            @include breakpoint(phablet){
                @include flex-direction(row);
            }

            @include breakpoint(laptop){
                @include align-items(center);
            }
        }

        .intro-text-wrapper{
            @include breakpoint(laptop){
                @include flex(1);
                margin-left: 2rem;
            }
        }

        .profile-image{
            width: 50%;
            margin: 0 auto;
            display: block;
            border-radius: 50%;

            @include breakpoint(phablet){
                width: 130px;
            }

            @include breakpoint(laptop){
                width: 200px;
            }
        }

        .hero-title{
            margin-bottom: 0;
        }

        .hero-subtitle{
            margin-top: 0;
        }

        .about-me--title{
            @include breakpoint(phablet){
                margin: 0 0 0 1rem;
                line-height: 130px;
            }

            @include breakpoint(laptop){
                margin: 1rem 0;
                line-height: 1;
            }
        }

        .hero-text{
            @include breakpoint(phablet){
                margin-left: -130px;
                margin-top: 1rem;
            }

            @include breakpoint(laptop){
                margin-left: 0;
                margin-top: 1rem;
            }
        }

        .hero-content-wrapper{
            @include flex(0 0 100%);

            @include breakpoint('phablet'){
                @include flex(3);
            }
        }

        .contact-link{
            display: inline-block;

            &:not(:first-child){
                padding-right: 0.5rem;
            }
        }
    }

</style>