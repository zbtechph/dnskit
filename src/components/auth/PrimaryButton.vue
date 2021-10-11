<template>
    <button
        type="submit"
        class="btn btn-success"
        :disabled="disabled"
    >
        <slot />
    </button>
</template>

<script setup>
const props = defineProps({
    disabled: Boolean
})
</script>