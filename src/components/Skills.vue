<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">

    <section id="skills" class="grid-container material-card">

        <h1 class="module-title">Competencies and research interests</h1>

        <div class="skill--separator" v-for="skill in skills">
            <h2 class="skill--name">{{skill.name}}</h2>
            <p class="skill--content">{{skill.text}}</p>
            <img :src="imgUrl(skill.imageURL)" class="skill--image">
        </div>
    </section>

</template>

<script>
    var images = require.context('../assets/', false);

    export default {
        name: 'skills',
        data () {
            return {
                skills: [
                    {
                        name: 'JavaScript',
                        text: `
                            JavaScript surrounds us in the modern day world and is one of the most useful languages
                            that one is able to learn. I spend my time solving Project Euler problems in many different
                            languages, but a particular interest is in JavaScript. Moreover, I am keen to deconstruct
                            the relative advantages and disadvantages of prototypal languages versus object oriented.
                            Thus it is my constant learning through reading the fantastic JavaScript Patterns book,
                            and through attempting to reconstruct ES6 statements using ES5 that leads me into the more
                            intrinsic works of JavaScript.
                        `,
                        imageURL: './javascript.svg'
                    },
                    {
                        name: 'Front End Tools',
                        text: `
                            The wide variety of frameworks, build tools and module loaders available out in the field
                            is staggering when it comes to their abundance, as well as their variety. This project is
                            currently built using vue.js and the source code can be viewed at this link.
                            I feel that in order to keep up to date, I must create and apply techniques to new projects
                            in order to grasp the whole landscape of this field. I am an early adopter of ES6 and use npm,
                            and webpack extensively for my project setup, as well as advocating
                            these technologies at my workplace.`,
                        imageURL: './es6.svg'
                    },
                    {
                        name: 'Search',
                        text: `
                            I work in a search oriented team at StudyPortals. This means not only the search relevancy,
                            but also a smooth browsing experience via filtering, result card style and feature visibility.
                            As a front end developer, I have attained great experience when it comes to autocomplete,
                            custom inputs amongst other things. At the TU/e I am currently following courses to do with
                            machine learning and adaptive web based systems. This knowledge should be useful to obtain
                            insights into the best way to increase search relevancy for studies and allow a user centric
                            build upon our current systems.
                        `,
                        imageURL: './search.svg'
                    },
                    {
                        name: 'Testing',
                        text: `
                            Testing is an important yet neglected aspect of front end web development. As an academic
                            student, I was always taught the benefit of test driven development. However when it comes
                            to the front end of a non computationally intensive web platform, this can be quite hard to
                            achieve with unit tests. I use karma for tests on this website, as well as selenium tests
                            at StudyPortals with integrated visual regression tests. Regression testing is an interesting
                            type of testing to run since it requires a lot of analysis around what your measurements should
                            be, rather than the complexity of the code itself.
                        `,
                        imageURL: './karma.png'
                    },
                    {
                        name: 'Agile',
                        text: `
                            During my full time work at StudyPortals, I was the scrum master of a scrum team there. It was here
                            that I developed my agile way of thinking about value added first, and adaptability to when the complexity
                            of a story increases rapidly. I now fully disbelieve in the waterfall method of software
                            development after seeing jsut how well this technique can be used in companies to
                            accelerate growth of development teams and the products that they build.
                        `,
                        imageURL: './agile.svg'
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
                return images(path)
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">

    @import '../styles/general';

    $imageWidth: 100px;

    #skills{
        @include flex-direction(column);

        .module-title{
            font-size: 2rem;
        }

        .skill--content{
            display: inline-block;
            margin: 0;

            @include breakpoint(laptop){
                width: calc(100% - #{$imageWidth} - 10px);
            }
        }

        .skill--separator{
            position: relative;
        }

        .skill--image{
            position: absolute;
            width: 60px;
            top: 0;
            right: 0;

            @include breakpoint(laptop){
                position: relative;
                width: $imageWidth;
            }
        }
    }

</style>