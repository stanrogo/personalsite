<template>
    <div id="work">
        <div class="grid-container">
            <h2 class="module-title--text">CURRENT ENDEAVOURS</h2>

            <section class="material-card current-card" v-for="endeavour in current">
                <div class="work-dates">{{endeavour.started}}</div>
                <h1 class="work-company">{{endeavour.title}}</h1>
                <figure class="work--figure">
                    <img :src="imgUrl(endeavour.imageURL)" class="work--image" :alt="endeavour.altText">
                </figure>
                <p>{{endeavour.description}}</p>
            </section>

            <h2 class="module-title--text">RECENT EXPERIENCE</h2>

            <section class="material-card work-card" v-for="experience in experiences">
                <div class="work-dates">{{experience.dates}}</div>
                <h1 class="work-company">{{experience.title}}</h1>
                <h2 class="work-position">{{experience.position}}</h2>
                <figure class="work--figure">
                    <img :src="imgUrl(experience.imageURL)" class="work--image" :alt="experience.altText">
                </figure>
                <p>{{experience.description}}</p>
            </section>
        </div>
    </div>
</template>

<script>

    import variables from '../variables.js';

    export default {
        name: 'work',
        data () {
            return {
                current: [
                    {
                        started: 'February 2017',
                        title: 'Computer Science and Engineering M.Sc.',
                        description: `
                            Working as part of a dynamic and young company with over 100 employees.
                            We have 5 scrum teams, and my team is responsible for content consumption on our portals.
                            This means finding relevant search results in a user friendly way along with displaying
                            information about studies in the best way possible. I have the chance to innovate with
                            visual regression tests and implementing ES6 and module loading in our organisation.
                            Responsiveness, speed and SEO are key aspects which I have learned and am continuing
                            to improve my skills upon.
                        `,
                        imageURL: 'v1491936881/metaforum_az2von.jpg',
                        altText: 'TUe logo on top of building'
                    },
                ],
                experiences: [
                    {
                        dates: 'November 2015 - present',
                        title: 'StudyPortals',
                        position: 'Front End Web Developer',
                        description: `
                            Working as part of a dynamic and young company with over 100 employees.
                            We have 5 scrum teams, and my team is responsible for content consumption on our portals.
                            This means finding relevant search results in a user friendly way along with displaying
                            information about studies in the best way possible. I have the chance to innovate with
                            visual regression tests and implementing ES6 and module loading in our organisation.
                            Responsiveness, speed and SEO are key aspects which I have learned and am continuing
                            to improve my skills upon.
                        `,
                        imageURL: 'v1485563099/studyportalscover_i0xeph.jpg',
                        altText: 'StudyPortals Conference'
                    },
                    {
                        dates: 'July 2015 - October 2015',
                        title: 'Cliq Digital',
                        position: 'Web Designer Intern',
                        description: `
                           At Cliq, designing to grab the users attention is a must. A user psychology perspective
                           must be taken, along with responsive design for the campaigns that are targeted at a host
                           of devices and form factors. Facebook marketing, along with building campaigns for clients
                           on a strict time schedule has helped me to be more organised and responsive to client needs.
                        `,
                        imageURL: 'v1491940335/Cliq_puumgs.jpg',
                        altText: 'Cliq Digital Logo'
                    },
                    {
                        dates: 'July 2013 - August 2013',
                        title: 'Twelve Cubes',
                        position: 'Front End Web Developer Intern',
                        description: `
                          Twelve Cubes specialise in crisis management solutions for companies such as Philips.
                          Here I began work on the new Alert system using for the first time Angular JS 1.
                          I worked as part of a team with two other back end developers and was heavily involved
                          in the initial design stages during this 2 month internship.
                        `
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
                return variables.imageBaseURLStripped + path
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">

    @import '../../styles/general';

    #work{

        .grid-container{
            @include flex-wrap(wrap);
            @include flex-direction(row);
        }

        .module-title--text{
            @include flex(0 0 100%);
        }

        .material-card{
            @include borderbox();
            margin-bottom: 1rem;

            @include breakpoint(tablet){
                margin-bottom: 2rem;
            }

            @include breakpoint(laptop){
                @include flex(0 0 calc(50% - 1rem));

                &:nth-of-type(2n){
                    margin-right: 2rem;
                }
            }
        }

        .current-card{
            @include flex(0 0 100%);
        }

        .work--figure{
            position: relative;
            margin: 0 -2rem;
            height: 200px;
            overflow: hidden;

            @include breakpoint(tablet){
                height: 300px;
            }

            .work--image{
                width: 100%;
                @include position-center();
            }
        }
    }
</style>
