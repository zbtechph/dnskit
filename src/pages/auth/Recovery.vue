<template>
    <zb-single-page title="Forgot your password?">
        <template v-slot:description>Fill in your email to reset your password.</template>
        <template v-slot:content>
            <zb-recovery-form size="lg" @recovery-email-sent="recoveryEmailSent" v-if="!sent" />
            <zb-alert
                type="primary"
                v-else
            >Instructions to recover your account has been sent to your email.</zb-alert>
            <p class="py-4">
                Go back to
                <router-link class="text-green-500" :to="{ name: 'login' }">login</router-link>
            </p>
        </template>
    </zb-single-page>
</template>

<script setup>
import { ref } from 'vue'
import ZbSinglePage from '../../components/auth/SinglePage.vue'
import ZbRecoveryForm from '../../components/auth/RecoveryForm.vue'
import ZbAlert from '../../components/Alert.vue'

const sent = ref(false)

const recoveryEmailSent = () => {
    sent.value = true;
}

</script>