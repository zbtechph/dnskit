<template>
    <zb-form @formSubmit="createAccount" :loader="state.loader" :errors="state.error">
        <zb-form-input label="Email Address" v-model="state.credential.email"></zb-form-input>
        <zb-form-input label="Password" v-model="state.credential.password" type="password"></zb-form-input>
    </zb-form>
</template>

<script setup>
import { reactive } from 'vue'
import ZbForm from './Form.vue'
import ZbFormInput from './Input.vue'

const state = reactive({
    error: null,
    credential: {
        email: "",
        password: ""
    },
    loader: false
})

const createAccount = () => {
    state.loader = true;

}

</script>