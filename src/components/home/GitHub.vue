<template>
    <section id="git-hub" class="grid-container material-card">
        <h1 class="git-title">GitHub</h1>
        <div class="github-widget" data-username="stanrogo"></div>
        <div class="git-description">
            <p>
                I am currently in the process of becoming more active on GitHub.
                All my projects that will be worked on during the course of university will be listed here
                as well as those projects that I personally work on, such as the golangtraining repo which
                contains my solutions to the project euler exercises in the go language.
            </p>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'git-hub'
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    @import '../../styles/general';

    #git-hub{
        @include flex-direction(row);
        @include flex-wrap(wrap);
        @include borderbox();

        .git-title{
            width: 100%;
        }

        .github-widget{
            max-width: none;
            width: 100%;

            @include breakpoint(laptop){
                width: 50%
            }

            .gh-widget-container:first-child{
                display: none;
            }

            .gh-widget-stats{
                @include flex-wrap(wrap);

                .gh-widget-item{
                    @include flex(0 0 50%);

                    @include breakpoint(phablet){
                        @include flex(1);
                    }
                }
            }
        }

        .git-description{
            width: 100%;

            @include breakpoint(laptop){
                width: 50%;
                padding: 2rem;
            }
        }
    }

</style>
