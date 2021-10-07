<template>
    <div class="p-3 my-3 rounded border" :class="classes">
        <slot></slot>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
    type: {
        type: String,
        default: "primary"
    }
})

const alertTypes = ref({
    primary: "border-blue-500 bg-blue-100 text-blue-500",
    secondary: "border-gray-500 bg-gray-100 text-gray-500",
    danger: "border-red-500 bg-red-100 text-red-500",
    warning: "border-yellow-500 bg-yellow-100 text-yellow-500"
})

const classes = computed(() => {
    return alertTypes.value[props.type]
})

</script>