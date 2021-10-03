<template>
    <form class="py-6" action="/" method="POST" @submit.prevent="attemptLogin">
        <zb-form-input label="Email Address" v-model="state.credential.email"></zb-form-input>
        <zb-form-input label="Password" v-model="state.credential.password" type="password"></zb-form-input>
        <div class="text-right">
            <router-link :to="{ name: 'recovery' }" class="text-green-500">Forgot your password?</router-link>
        </div>
        <div class="">
            <button type="submit" class="rounded-lg font-bold p-4 bg-green-400 text-green-100">LOGIN</button>
        </div>
        <p class="py-4">Don't have an account? <router-link class="text-green-500" :to="{name:'register'}">Signup</router-link></p>
    </form>
</template>

<script setup>
import { reactive } from 'vue'
import ZbFormInput from './Input.vue'

const state = reactive({
    credential: {
        email: "",
        password: ""
    }
})

const attemptLogin = () => {
    alert("login attempt!")
}

</script>