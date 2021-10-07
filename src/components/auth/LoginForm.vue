<template>
    <zb-form @form-submit="attemptLogin" :loader="state.loader" :errors="state.error">
        <zb-form-input label="Email Address" v-model="state.credential.email"></zb-form-input>
        <zb-form-input label="Password" v-model="state.credential.password" type="password"></zb-form-input>
        <div class="text-right">
            <router-link :to="{ name: 'recovery' }" class="text-green-500" tabindex="-1">Forgot your password?</router-link>
        </div>
    </zb-form>
</template>

<script setup>
import { reactive } from 'vue'
import ZbForm from './Form.vue'
import ZbFormInput from './Input.vue'
import { useStore } from 'vuex'

const store = useStore();

const state = reactive({
    error: null,
    credential: {
        email: "",
        password: ""
    },
    loader: false
})

const emit = defineEmits(["loggedIn"])

const attemptLogin = async () => {
    state.loader = true;
    store.dispatch("session/login", state.credential)
        .then(user=>{
            if(user) emit("loggedIn")
        }).catch(error=>{
            state.error = error.message
        }).finally(()=>{
            state.loader = false;
            state.credential.password = "";
        })
}

</script>