<template>
    <form action="/" method="POST" @submit.prevent="$emit('formSubmit')">
        <zb-alert v-if="props.errors" type="danger">{{ errors }}</zb-alert>
        <slot></slot>
        <div>
        <zb-primary-button :disabled="props.loader">{{ props.btnText }}</zb-primary-button>
        </div>
    </form>
</template>

<script setup>
import ZbAlert from '../Alert.vue'
import ZbPrimaryButton from './PrimaryButton.vue'

const props = defineProps({
    errors: String,
    loader: {
        type: Boolean,
        default: false
    },
    btnText: {
        type: String,
        default: "Submit"
    }
})

defineEmits(['formSubmit'])

</script>