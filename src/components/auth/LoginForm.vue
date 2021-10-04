<template>
    <form class="py-6" action="/" method="POST" @submit.prevent="attemptLogin">
        <zb-alert v-if="state.error" type="danger">{{ state.error }}</zb-alert>
        <zb-form-input label="Email Address" v-model="state.credential.email"></zb-form-input>
        <zb-form-input label="Password" v-model="state.credential.password" type="password"></zb-form-input>
        <div class="text-right">
            <router-link :to="{ name: 'recovery' }" class="text-green-500" tabindex="-1">Forgot your password?</router-link>
        </div>
        <div class="">
            <zb-primary-button :disabled="state.loader">LOGIN</zb-primary-button>
        </div>
        <p class="py-4">Don't have an account? <router-link class="text-green-500" :to="{name:'register'}">Signup</router-link></p>
    </form>
</template>

<script setup>
import { reactive } from 'vue'
import ZbFormInput from './Input.vue'
import ZbAlert from '../Alert.vue'
import ZbErrorMessage from '../ErrorMessage.vue'
import ZbPrimaryButton from './PrimaryButton.vue'

const state = reactive({
    error: null,
    credential: {
        email: "",
        password: ""
    },
    loader: false
})

const attemptLogin = () => {
    state.loader = true;

}

</script>