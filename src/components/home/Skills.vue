<template>
    <section id="skills" class="material-card">
        <div class="skill--explanation">
            <h1 class="skills--title">What do I like?</h1>

            <img class="skill--image-mobile" :src="constructImageUrl('responsive.jpg')">

            <div class="skill--separator" v-for="skill in skills">
                <h2 >{{skill.name}}</h2>
                <p>{{skill.text}}</p>
            </div>
        </div>

        <div class="skill--images">
            <figure>
                <img :src="constructImageUrl('responsive.jpg')">
            </figure>
        </div>
    </section>
</template>

<script>

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
                        altText: 'JavaScript logo'
                    },
                    {
                        name: 'Front End Tools',
                        text: `
                            The wide variety of frameworks, build tools and module loaders available out in the field
                            is staggering. This project is currently built using vue.js.
                            I'm an early adopter of ES6 and use npm,
                            and webpack extensively for my project setup, as well as advocating
                            these technologies at my workplace.`,
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
                        altText: 'Search magnifying glass icon'
                    },
                    {
                        name: 'Testing',
                        text: `
                            Testing is a neglected aspect of front end web development. As an academic
                            student, I was always taught the benefit of TDD. I advocate testing whether it be karma for
                            unit tests, or selenium tests at StudyPortals with integrated visual regression tests.
                        `,
                        altText: 'Karma test runner logo'
                    },
                    {
                        name: 'Agile',
                        text: `
                            During my work at StudyPortals, I was a scrum master there. I developed an agile way of
                             thinking about value added first, and adaptability to when the complexity
                            of a story increases rapidly. Throw out waterfall and see
                            accelerated growth of development teams and the products that they build is what I believe.
                        `,
                        altText: 'Agile process cycle graphic'
                    }
                ]
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

        @include breakpoint(laptop){
            @include flex-direction(row);
        }

        .skill--explanation{
            @include borderbox();
            padding: 1rem;

            @include breakpoint(laptop){
                width: 50%;
                padding: 2rem;
            }

            .skills--title{
                font-size: 3rem;
                text-transform: uppercase;
            }

            .skill--image-mobile{
                @include breakpoint(laptop){
                    display: none;
                }
            }
        }

        .skill--images {
            display: none;
            @include align-items(center);
            @include justify-content(center);
            width: 50%;
            background-color: #f9d131;

            @include breakpoint(laptop) {
                @include flexbox();
            }
        }

        .skill--image-mobile{
            width: 100%;
        }
    }

</style>