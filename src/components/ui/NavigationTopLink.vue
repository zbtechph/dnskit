<template>
    <router-link :to="props.to" class="p-3 border-b-2" exact-active-class="border-blue-500"><slot></slot></router-link>
</template>

<script setup>
const props = defineProps({
    to: {
        type: [ Object, String ],
        required: true
    }
})
</script>