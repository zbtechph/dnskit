<template>
    <div class="alert" :class="alertType">
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

const alertType = computed(()=>`alert-${props.type}`)

</script>