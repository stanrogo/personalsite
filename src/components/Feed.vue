<template>
    <div id="feed">
            <div class="material-card clearfix"  v-for="post in posts">
                <h1>{{post.name}}</h1>
                <p class="post-summary">{{post.summary}}</p>
                <span class="fontawesome-user quick-fact">Stanley Clark</span>
                <span class="fontawesome-calendar quick-fact">{{post.date}}</span>
                <span class="fontawesome-tag quick-fact" v-for="tag in post.tags">{{tag}}</span>

                <button class="button button--block font--white">Read more</button>
            </div>
    </div>
</template>

<script>

    export default {
        name: 'feed',
        data () {
            return {
                posts: [
                    {
                        name: `Let's Go! Get the Go Lang`,
                        summary: `
                            The Go programming language is an exciting new language that you should have learned
                            a year ago already (including me). It's a language featuring native concurrency,
                             static typing and standards driven development. Let's dive in for a look at some of
                             the cool things that you can be doing.
                        `,
                        date: '1st January 2017',
                        tags: ['Web Development']
                    },
                    {
                        name: `My Polyphasic Sleep Experience: Almost an Everyman`,
                        summary: `
                           It's Christmas Day. Last night was the most tired night in a long while, and yet that very
                            same morning all my stress was gone. Worries of not making it on time were unfounded.
                            I had all the time in the world and I was loving it. So despite getting ill, feeling the
                             stress of having such a nap rhythm, it's beginning to look a lot like success.
                        `,
                        date: '25th December 2015',
                        tags: ['Sleep', 'Experimental']
                    },
                    {
                        name: `Visual Regression Testing At StudyPortals`,
                        summary: `
                         Testing is a very important part of web development, but on the front-end with a lot of dom
                         operations and not so much computational logic, it is a bit redundant to write unit tests
                         when other test methodologies bring more value. Enter Visual Regression Testing, which aims
                         to find differences between screenshots of different versions of the code.
                        `,
                        date: '25th December 2015',
                        tags: ['Testing', 'Web Development', 'StudyPortals']
                    }
                ]
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    @import '../styles/general';

    #feed{
        .material-card{
            margin-top: 2rem;
        }

        .button{
            margin-top: 1rem;
            float: right;
        }

        .quick-fact{
            margin-right: 1rem;

            &:before{
                margin-right: 0.3rem;
            }
        }
    }

</style>
