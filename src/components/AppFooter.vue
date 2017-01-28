<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">

    <footer id="footer">
        <img class="border-image" :src="imgUrl('footer-border_o1wzae.png')">
    </footer>

</template>

<script>

    import variables from './variables.js';

    export default {
        name: 'app-footer',
        data () {
            return {

            }
        },
        methods: {
            imgUrl: function(image){

                return variables.imageBaseURL5 + image;
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">

    @import '../styles/general';

    #footer{
        position: relative;

        .border-image{
            display: block;
            width: 100%;
        }
    }

</style>