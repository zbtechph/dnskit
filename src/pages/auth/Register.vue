<template>
    <zb-single-page title="Join us!">
        <template v-slot:description>Create an account to manage your dns records</template>
        <template v-slot:content>
            <zb-external-auth title="Signup with" class="pt-3"/>
            <hr/>
            <zb-signup-form size="lg" @account-created="accountCreated" />
            <p class="py-4">
                Already got an account?
                <router-link class="text-green-500" :to="{ name: 'login' }">Login</router-link>
            </p>
        </template>
    </zb-single-page>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ZbSinglePage from '../../components/auth/SinglePage.vue'
import ZbSignupForm from '../../components/auth/SignupForm.vue'
import ZbExternalAuth from '../../components/auth/External.vue'

const route = useRoute()
const router = useRouter()
const redirect = computed(() => route.query.redirect || '/')

const accountCreated = () => {
    router.push(redirect.value)
}

</script>