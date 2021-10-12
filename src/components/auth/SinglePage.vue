<template>
    <div class="container-fluid">
        <div class="row vh-100">
            <div class="col-12 col-md-6 order-md-last d-none d-md-block" style="background-image:url('https://i.ibb.co/mHy7W9t/ivana-cajina-d-Qej-X2uc-PBs-unsplash.jpg');background-repeat: no-repeat; background-size:cover"></div>
            <div class="col-12 col-md-6 px-4 px-md-5">
                <div class="pt-5">
                    <h1 v-text="props.title"></h1>
                    <p><slot name="description"></slot></p>
                </div>
                <slot name="content"></slot>
            </div>
            
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    title: String
})

</script>