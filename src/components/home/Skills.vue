<template>

    <section id="skills" class="material-card">


        <div class="skill--explanation">
            <h1 class="skills--title">What do I like?</h1>

            <img class="skill--image-mobile" src="src/images/responsive.jpg">

            <div class="skill--separator" v-for="skill in skills" :class="skill.classText">
                <h2 class="skill--name">{{skill.name}}</h2>
                <p class="skill--content">{{skill.text}}</p>
            </div>
        </div>

        <div class="skill--images">
            <figure>
                <img src="src/images/responsive.jpg">
            </figure>
        </div>

    </section>

</template>

<script>
    import variables from '../variables.js';

    export default {
        name: 'skills',
        data () {
            return {
                skills: [
                    {
                        name: 'JavaScript (ES6)',
                        text: `
                            JavaScript surrounds us in the modern day world and I've spent countless time solving
                            Project Euler problems in different languages, but in particular, JavaScript.
                            I've read the fantastic JavaScript Patterns book, reconstructed ES6 statements in ES5 and
                            use it every day at work.
                        `,
                        imageURL: '5/javascript_jw6rmc.svg',
                        altText: 'JavaScript logo',
                        classText: 'skill--js'
                    },
                    {
                        name: 'Front End Tools',
                        text: `
                            The wide variety of frameworks, build tools and module loaders available out in the field
                            is staggering. This project is currently built using vue.js.
                            I'm an early adopter of ES6 and use npm,
                            and webpack extensively for my project setup, as well as advocating
                            these technologies at my workplace.`,
                        imageURL: '5/es6_iw6urd.svg',
                        altText: 'EcmaScript 6 logo'
                    },
                    {
                        name: 'Search',
                        text: `
                            I work in a search oriented team at StudyPortals. This means not only the search relevancy,
                            but also a smooth browsing experience via filtering, result card style and feature visibility.
                            As a front end developer, I have attained great experience when it comes to autocomplete,
                            custom inputs and thinking about machine learning in search (following courses at the TU/e).
                        `,
                        imageURL: '6/search_lndh2x.svg',
                        altText: 'Search magnifying glass icon',
                        classText: 'skill--search'
                    },
                    {
                        name: 'Testing',
                        text: `
                            Testing is a neglected aspect of front end web development. As an academic
                            student, I was always taught the benefit of TDD. I advocate testing whether it be karma for
                            unit tests, or selenium tests at StudyPortals with integrated visual regression tests.
                        `,
                        imageURL: '5/karma_igqiaq.png',
                        altText: 'Karma test runner logo',
                        classText: 'skill--testing'
                    },
                    {
                        name: 'Agile',
                        text: `
                            During my work at StudyPortals, I was a scrum master there. I developed an agile way of
                             thinking about value added first, and adaptability to when the complexity
                            of a story increases rapidly. Throw out waterfall and see
                            accelerated growth of development teams and the products that they build is what I believe.
                        `,
                        imageURL: '4/agile_lrwslq.svg',
                        altText: 'Agile process cycle graphic'
                    }
                ]
            }
        },
        methods: {
            /**
             * This method is a wrapper in order for dynamic image loading to work
             * @param path
             * @returns {*}
             */
            imgUrl: function (path) {
                return variables.imageBaseURL + path
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">

    @import '../../styles/general';

    #skills{
        @include flexbox();

        @include flex-direction(column-reverse);
        padding: 0;

        @include breakpoint(tablet){
            @include flex-direction(row);
        }

        .skill--explanation{
            @include borderbox();
            padding: 1rem;

            @include breakpoint(tablet){
                width: 50%;
                padding: 2rem;
            }

            .skills--title{
                font-size: 3rem;
                text-transform: uppercase;
            }

            .skill--image-mobile{
                @include breakpoint(tablet){
                    display: none;
                }
            }
        }

        .skill--images{
            display: none;
            @include align-items(center);
            @include justify-content(center);
            width: 50%;
            background-color: #f9d131;

            @include breakpoint(tablet){
                @include flexbox();
            }
        }

        .skill--name{
            font-size: 1.3rem;
        }

        .skill--content{
            display: inline-block;
            margin: 0;
        }
    }

</style>