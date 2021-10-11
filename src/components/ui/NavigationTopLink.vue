<template>
    <router-link :to="props.to" class="nav-link" exact-active-class="active"><slot></slot></router-link>
</template>

<script setup>
const props = defineProps({
    to: {
        type: [ Object, String ],
        required: true
    }
})
</script>