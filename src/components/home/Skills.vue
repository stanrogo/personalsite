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