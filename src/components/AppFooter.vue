<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">

    <footer id="footer">
        <img class="border-image" src="../assets/footer-border.png">
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

        .border-image{
            display: block;
            width: 100%;
        }
    }

</style>