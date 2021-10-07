<template>
    <div class="flex flex-wrap md:h-screen text-gray-500">
        <div
            class="w-full bg-no-repeat bg-cover h-52 md:w-1/2 md:h-full"
            style="background-image:url('https://i.ibb.co/mHy7W9t/ivana-cajina-d-Qej-X2uc-PBs-unsplash.jpg')"
        ></div>
        <div class="w-full md:w-1/2 md:order-first p-8">
            <div class="py-8">
                <h1 class="text-4xl font-semibold text-gray-600" v-text="props.title"></h1>
                <p class="text-gray-400">
                    <slot name="description"></slot>
                </p>
            </div>
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    title: String
})

</script>