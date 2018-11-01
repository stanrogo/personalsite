<template>
<section id="footer" class="text-white">
    <div class="container">
        <div class="row">
            <div class="col text-center py-4 d-flex flex-column">
                <div class="py-2">Need more info? Feel free to reach out!</div>
                <Contact/>
                <div class="py-2">Made with hours of frustration and even more hours of fun, by stanrogo. | Copyright 2018 - stanrogo</div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import Contact from './Contact.vue';

export default {
    name: 'Footer',
    components: {
        Contact,
    },
};
</script>

<style lang="scss">
#footer{
    background: rgba(29, 36, 42, 0.9);
}
</style>

