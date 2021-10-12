<template>
    <form action="/" method="POST" @submit.prevent="$emit('formSubmit')">
        <zb-alert v-if="props.errors" type="danger">{{ errors }}</zb-alert>
        <slot></slot>
        <div class="d-grid gap-2 py-3">
            <zb-button type="submit" :class="btnSize" color="success" :disabled="props.loader">{{ props.btnText }}</zb-button>
        </div>
    </form>
</template>

<script setup>
import { computed } from 'vue'
import ZbAlert from './Alert.vue'
import ZbButton from './Button.vue'

const props = defineProps({
    errors: String,
    loader: {
        type: Boolean,
        default: false
    },
    btnText: {
        type: String,
        default: "Submit"
    },
    size: {
        type: String,
        default: "md"
    }
})

const btnSize = computed(()=>`btn-${props.size}`)

defineEmits(['formSubmit'])

</script>