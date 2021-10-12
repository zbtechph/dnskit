<template>
    <button
        :type="props.type"
        class="btn" :class="btnClass"
        :disabled="disabled"
    >
        <slot />
    </button>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
    disabled: Boolean,
    type: {
        type: String,
        default: "button"
    },
    color: {
        type: String,
        default: "success"
    }
})

const btnClass = computed(()=>`btn-${props.color}`)

</script>