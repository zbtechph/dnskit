<template>
    <zb-single-page title="Welcome back!">
        <template v-slot:description>Login to start using our services.</template>
        <template v-slot:content>
            <div class="flex">
                <button
                    type="button"
                    class="w-full bg-blue-500 text-blue-100 p-3 rounded font-bold"
                    @click="store.dispatch('session/loginWith','google')"
                >Log in with Google</button>
            </div>
            <zb-login-form @loggedIn="loggedIn" />
            <p class="py-4">
                Don't have an account?
                <router-link class="text-green-500" :to="{ name: 'register' }">Signup</router-link>
            </p>
        </template>
    </zb-single-page>
</template>

<script setup>
import { computed } from 'vue'
import ZbSinglePage from '../../components/auth/SinglePage.vue'
import ZbLoginForm from '../../components/auth/LoginForm.vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const route = useRoute()
const router = useRouter()
const redirect = computed( () => route.query.redirect || '/')

const loggedIn = () => {
    router.push(redirect.value)
}

</script>