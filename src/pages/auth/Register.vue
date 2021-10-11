<template>
    <zb-single-page title="Join us!">
        <template v-slot:description>Create an account to manage your dns records</template>
        <template v-slot:content>
            <div class="py-4">
                <button
                    type="button"
                    class="btn btn-primary"
                    @click="store.dispatch('session/loginWith', 'google')"
                >Signup with Google</button>
            </div>
            <zb-signup-form @account-created="accountCreated" />
            <p class="py-4">
                Already got an account?
                <router-link class="text-green-500" :to="{ name: 'login' }">Login</router-link>
            </p>
        </template>
    </zb-single-page>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import ZbSinglePage from '../../components/auth/SinglePage.vue'
import ZbSignupForm from '../../components/auth/SignupForm.vue'

const store = useStore()
const route = useRoute()
const router = useRouter()
const redirect = computed(() => route.query.redirect || '/')

const accountCreated = () => {
    router.push(redirect.value)
}

</script>