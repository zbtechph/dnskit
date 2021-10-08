<template>
    <zb-form @formSubmit="sendRecoveryLink" :loader="state.loader" :errors="state.error">
        <zb-form-input label="Email Address" v-model="state.credential.email"></zb-form-input>
    </zb-form>
</template>

<script setup>
import { reactive } from 'vue'
import { useStore } from 'vuex'
import ZbForm from './Form.vue'
import ZbFormInput from './Input.vue'

const store = useStore()
const state = reactive({
    error: null,
    credential: {
        email: ""
    },
    loader: false
})

const emit = defineEmits(["recoveryEmailSent"])

const sendRecoveryLink = () => {
    state.loader = true;
    store.dispatch("session/resetPassword", state.credential)
        .then(() => emit("recoveryEmailSent"))
        .catch(error => {
            state.error = error.message
        }).finally(() => {
            state.loader = false;
        })
}

</script>