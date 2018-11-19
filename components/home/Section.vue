<template>
<section class="section">
    <div class="container">
        <div class="row">
            <div class="col">
                <h1 class="section--heading text-center">{{ name }}</h1>
                <hr/>
                <slot name="section-content"/>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: 'Section',
    props: [
        'name',
    ],
};
</script>

<style lang="scss">
.section {
    padding: 4rem 0;

    .section--heading {
        text-transform: uppercase;
        color: white;
        display: inline-block;
        font-size: 1.5rem;
    }
}
</style>
