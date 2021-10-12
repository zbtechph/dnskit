<template>
    <zb-form :size="props.size" @formSubmit="createAccount" :loader="state.loader" :errors="state.error">
        <zb-form-input label="Email Address" v-model="state.credential.email" :size="props.size"></zb-form-input>
        <zb-form-input label="Password" v-model="state.credential.password" type="password" :size="props.size"></zb-form-input>
    </zb-form>
</template>

<script setup>
import { reactive } from 'vue'
import { useStore } from 'vuex'
import ZbForm from '../Form.vue'
import ZbFormInput from '../Input.vue'

const store = useStore()
const state = reactive({
    error: null,
    credential: {
        email: "",
        password: ""
    },
    loader: false
})
const props = defineProps({
    size: String
})

const createAccount = () => {
    state.loader = true;
    store.dispatch("session/signup", state.credential)
        .then(user => {
            if (user) emit("accountCreated")
        }).catch(error => {
            state.error = error.message
        }).finally(() => {
            state.password = "";
            state.loader = false;
        })
}

const emit = defineEmits(["accountCreated"])

</script>