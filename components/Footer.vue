<template>
<section id="footer" class="p-3 d-flex flex-md-column flex-wrap text-center text-md-left">
    <div class="d-flex justify-content-between flex-column-reverse flex-md-row w-100">
        <span class="my-4 my-md-0"><strong>stanrogo.</strong> web engineer</span>
        <Contact/>
    </div>
    <div class="mb-2 mt-0 my-md-4 w-100 copy">Copyright 2018</div>
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
    background: #F6F6F6;

    .copy{
        font-size: 11px;
        color: #767676;
    }
}
</style>

