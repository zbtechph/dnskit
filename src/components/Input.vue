<template>
    <div class="mb-3">
        <label class="form-label" v-text="props.label"></label>
        <input
            :type="props.type"
            class="form-control"
            :class="sizeClass"
            :value="props.modelValue"
            :required="props.required"
            :readonly="props.readonly"
            @input="$emit('update:modelValue', $event.target.value)"
        />
        <slot></slot>
    </div>
</template>

<script setup>
import { computed } from 'vue'

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
    readonly: {
        type: Boolean,
        default: false
    },
    size: {
        type: String,
        default: "md"
    },
    modelValue: String,
})

const sizeClass = computed(()=>`form-control-${props.size}`)

defineEmits(['update:modelValue'])
</script>