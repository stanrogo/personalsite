<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">

    <footer id="footer">
        <img class="border-image" src="../assets/footer-border.png">
        <div class="grid-container">



        </div>
    </footer>

</template>

<script>
    export default {
        name: 'app-footer',
        data () {
            return {

            }
        },
        methods: {
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">

    @import '../styles/general';

    #footer{
        position: relative;
        margin-top: 10rem;
        height: 50px;
        padding: 1rem 0;
        background-color: #414042;
        color: $color--white;


        .grid-container{
            @include justify-content(space-between);
            @include flex-direction(column);

            @include breakpoint(tablet){
                @include flex-direction(row);
            }
        }

        .links--title{
            font-size: 1.2rem;
        }

        .border-image{
            width: 100%;
            margin-top:-200px;
        }
    }

</style>