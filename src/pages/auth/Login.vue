<template>
    <zb-single-page title="Welcome back!">
        <template v-slot:description>Login to start using our services.</template>
        <template v-slot:content>
            <zb-external-auth title="Login using" class="pt-3"/>
            <hr/>
            <zb-login-form size="lg" @loggedIn="loggedIn" />
            <p class="py-4">
                Don't have an account?
                <router-link class="text-green-500" :to="{ name: 'register' }">Signup</router-link>
            </p>
        </template>
    </zb-single-page>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ZbSinglePage from '../../components/auth/SinglePage.vue'
import ZbLoginForm from '../../components/auth/LoginForm.vue'
import ZbExternalAuth from '../../components/auth/External.vue'

const route = useRoute()
const router = useRouter()
const redirect = computed(() => route.query.redirect || '/')

const loggedIn = () => {
    router.push(redirect.value)
}

</script>