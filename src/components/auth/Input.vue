<template>
    <div class="flex flex-col my-4">
        <label class="text-sm font-semibold my-2" v-text="props.label"></label>
        <input
            :type="props.type"
            class="rounded px-2 py-3 border focus:outline-none focus:ring focus:ring-green-500 focus:ring-opacity-50"
            :value="modelValue"
            :required="props.required"
            @input="$emit('update:modelValue', $event.target.value)"
        />
        <slot></slot>
    </div>
</template>

<script setup>
const props = defineProps({
    label: String,
    required: {
        type: Boolean,
        default: true
    },
    type: {
        type: String,
        default: "text"
    },
    modelValue: String
})

defineEmits(['update:modelValue'])
</script>