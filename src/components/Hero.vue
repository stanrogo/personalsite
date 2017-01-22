<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">

    <div id="hero">
        <div class="hero-background"></div>
        <div class="grid-container material-card">

            <div class="intro-wrapper">
                <img class="profile-image" src="../assets/me3.jpg">
                <section class="intro-text-wrapper">
                    <h2 class="hero-title">HI, I'M <strong>STANLEY CLARK</strong></h2>
                    <h3 class="hero-subtitle">Front end developer and student, Eindhoven</h3>
                    <p class="hero-text">
                        I'm Stanley Clark. I love to focus on the expanding frontier of
                        web development. I'm interested in all things front end, including
                        using webpack, angular2, react, npm, and lots more. Not limiting
                        myself to just pure technologies I see the importance of proper
                        SEO for web sites and the importance of conversion rates vs
                        user satisfaction balance on any website.
                    </p>
                </section>
            </div>
            <section class="about-wrapper">
                <h2 class="about-section-title">CURRENT FOCUS</h2>
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

            <ul>
                <li class="contact-link">Contact me on</li>
                <li class="contact-link" v-for="link in links">
                    <a class="social-icon" target="_blank"
                       :href="link.href">{{link.name}}</a>
                </li>
            </ul>

        </div>
    </div>

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

    @import '../styles/general';

    #hero{

        .hero-background{
            background: $color--white url("../assets/diagonal.jpg") center;
            height: 400px;
        }

        .grid-container{
            @include flex-direction(column);
            padding: 2rem;
            margin-top: -300px;
        }

        .intro-wrapper{
            @include flexbox();
            @include align-items(flex-start);
        }

        .profile-image{
            width: 100px;
            padding: 1rem 1rem 1rem 0;

            @include breakpoint(phablet){
                width: 130px;
                padding: 1rem 1rem 1rem 0;
            }

            @include breakpoint(tablet){
                width: 200px;
                padding: 1rem 1rem 1rem 0;
            }
        }

        .hero-title{
            position: absolute;
            transform: translateY(-50%);
            top: 70px;

            @include breakpoint(phablet){
                position: relative;
                transform: none;
                top: 0;
                margin: 1.5rem 0 0.5rem;
            }
        }

        .hero-subtitle{
            margin-left: -100px;
            margin-top: 120px;

            @include breakpoint(phablet){
                margin-left: 0;
                margin-top: 1rem;
                max-width: 315px;
            }

            @include breakpoint(tablet){
                max-width: none;
            }
        }

        .hero-text{
            margin-left: -100px;

            @include breakpoint(phablet){
                margin-left: -130px;
                margin-top: 2.5rem;
            }

            @include breakpoint(tablet){
                margin-left: 0;
                margin-top: 1rem;
            }
        }

        .hero-content-wrapper{
            flex: 0 0 100%;

            @include breakpoint('phablet'){
                flex: 3;
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