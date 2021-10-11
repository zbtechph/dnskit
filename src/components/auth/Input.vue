<template>
    <div class="mb-3">
        <label class="form-label" v-text="props.label"></label>
        <input
            :type="props.type"
            class="form-control"
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