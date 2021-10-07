<template>
    <button
        type="submit"
        class="rounded-lg font-bold p-4 bg-green-400 text-green-100 uppercase focus:outline-none focus:ring focus:ring-green-500 focus:ring-opacity-50 disabled:opacity-50"
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