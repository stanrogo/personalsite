<template>
    <div id="work">
        <section class="work-card" v-for="experience in experiences" :class="experience.classText">
            <figure class="work--figure" v-if="experience.imageURL">
                <img :src="constructImageUrl(experience.imageURL, experience.imageOptions || {})" class="work--image"
                     :alt="experience.altText">
            </figure>
            <div class="work--content">
                <div class="work-dates">{{experience.dates}}</div>
                <h1 class="work-company">{{experience.title}}</h1>
                <h2 class="work-position">{{experience.position}}</h2>
                <p>{{experience.description}}</p>
            </div>
        </section>
    </div>
</template>

<script>

    export default {
        name: 'work',
        data () {
            return {
                experiences: [
                    {
                        dates: 'February 2017 - present',
                        title: 'Computer Science and Engineering M.Sc.',
                        position: 'Student',
                        description: `
                            Working as part of a dynamic and young company with over 100 employees.
                            We have 5 scrum teams, and my team is responsible for content consumption on our portals.
                            This means finding relevant search results in a user friendly way along with displaying
                            information about studies in the best way possible. I have the chance to innovate with
                            visual regression tests and implementing ES6 and module loading in our organisation.
                            Responsiveness, speed and SEO are key aspects which I have learned and am continuing
                            to improve my skills upon.
                        `,
                        imageURL: 'metaforum_az2von.jpg',
                        altText: 'TUe logo on top of building',
                        classText: 'current-card'
                    },
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
                        imageURL: 'studyportalscover_i0xeph.jpg',
                        imageOptions: {crop: 'crop', height: '345',width: '480'},
                        altText: 'StudyPortals Conference',
                        classText: ''
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
                           I worked on campaigns for mobile wallpapers, virsu scanners, smileys and ringtones for a
                           variety of markets, with a variety of compliance requirements based on the country.
                           I understood the variety of users out there and helped to target campaigns based on
                           personalised factors.
                        `,
                        imageURL: 'Cliq_puumgs.jpg',
                        imageOptions: {effect: 'art:incognito', crop: 'fill', height: '345',width: '480'},
                        altText: 'Cliq Digital Logo',
                        classText: ''
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
                        `,
                        imageURL: 'placeholder3_qbviea.png',
                        classText: 'current-card'
                    }
                ]
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">

    @import '../../styles/general';

    #work{
        @include flexbox();
        @include flex-wrap(wrap);
        @include flex-direction(column);

        .module-title--text, .current-card{
            @include flex(0 0 100%);
        }

        .work-card{
            @include flexbox();
            @include flex-direction(column);

            @include breakpoint(laptop){
                @include flex-direction(row);
            }

            &:nth-of-type(2n){
                @include breakpoint(laptop){
                    @include flex-direction(row-reverse);
                }
            }
        }

        .work--content{
            @include flexbox();
            @include flex-direction(column);
            padding: 1rem;
        }

        .work-company, .work-position{
            margin: 0;
        }

        .work--figure{
            position: relative;
            margin: 0;
            overflow: hidden;
            height: 200px;

            @include breakpoint(laptop){
                @include flex(0 0 50%);
                height: auto;
            }

            .work--image{
                width: 100%;
                @include position-center();
            }
        }
    }
</style>
