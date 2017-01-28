<template>
    <section id="git-hub" class="grid-container material-card">
        <h1 class="git-title">GitHub</h1>

        <div class="github-widget">
            <div class="git-stats">
                <div class="stat-num">{{followers}}</div>
                <div>Followers</div>
            </div>
            <div class="git-stats">
                <div class="stat-num">{{following}}</div>
                <div>Following</div>
            </div>
            <div class="git-stats">
                <div class="stat-num">{{repositories.length}}</div>
                <div>Repositories</div>
            </div>
            <div class="repo-info">
                <span class="top-repos-title">Top Repositories</span>
                <div class="repo-row" v-for="repo in repositories">
                    <span><a :href="repo.url" target="_blank">{{repo.name}}</a></span>
                    <span>{{repo.language}}</span>
                    <span class="fa-star">{{repo.stars}}</span>
                </div>
            </div>
            <div class="follow-row">
                <a class="follow-button" :href="profileUrl" target="_blank">Follow</a>
                <span class="last-active">Last active: <span class="day-num">{{updated}} day ago</span></span>
            </div>
        </div>

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
        name: 'git-hub',
        data (){
            return {
                followers: 0,
                following: 0,
                profileUrl: '',
                updated: 0,
                repositories: [],
            }
        },
        created(){
            this.$http.get('https://api.github.com/users/stanrogo').then(response => {

                // get body data

                const gitData = response.body;

                this.followers = gitData.followers;
                this.following = gitData.following;
                this.profileUrl = gitData.html_url;

                const now = (new Date()).getTime();
                const lastUpdate = (new Date(gitData.updated_at)).getTime();
                const difference = now - lastUpdate;

                this.updated =  Math.ceil(difference / 1000 / 60 / 60 / 24);
            }).catch(error => {

            });

            this.$http.get('https://api.github.com/users/stanrogo/repos').then(response => {

                const gitData = response.body;
                gitData.forEach(repo => {

                    this.repositories.push({
                        name: repo.name,
                        url: repo.url,
                        language: repo.language,
                        stars: repo.stargazers_count
                    })
                });
            }).catch(error => {

            });
        }
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
            @include flex(1);
            @include flexbox();
            @include flex-wrap(wrap);
            @include justify-content(center);
            @include align-items(center);
            border: 1px solid $color--grey-medium;

            @include breakpoint(desktop){
                width: 488px;
            }

            .git-stats{
                width: 50%;
                text-align: center;

                @include breakpoint(phablet){
                    width: calc(99.99% / 3);
                }
            }

            .stat-num{
                padding: 0.3rem 0;
                color: #1976D2;
                font-size: 1.4rem;
            }

            .repo-info{
                display: block;
                width: 100%;
                margin-top: 1rem;
                padding-top: 1rem;
                border-top: 1px solid $color--grey-medium;
                text-align: center;
            }

            .top-repos-title{
            }

            .repo-row{
                @include flexbox();
                @include justify-content(space-around);
                text-align: left;
                padding: 1rem 0;
            }

            .follow-row{
                width: 100%;
                padding: 0.5rem;
                @include flexbox();
                @include justify-content(space-between);
                @include align-items(center);
            }

            .follow-button{
                background-color: $color--grey-light;
                border: none;
                padding: 0.5rem 1rem;

                &:hover, &:focus{
                    text-decoration: none;
                }
            }

            .last-active{
                .day-num{
                    display: block;

                    @include breakpoint(phablet){
                        display: inline;
                    }
                }
            }
        }

        .git-description{
            width: 100%;

            @include breakpoint(desktop){
                width: 50%;
                padding: 2rem;
            }
        }
    }

</style>
