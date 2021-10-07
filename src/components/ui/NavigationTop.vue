<template>
    <div class="shadow">
        <div class="flex flex-row items-center md:w-1/2 md:justify-center">
            <zb-navigation-top-link :to="{ name: 'home' }">Home</zb-navigation-top-link>
            <zb-navigation-top-link :to="{ name: 'account' }">Account</zb-navigation-top-link>
            <zb-logout-button classes="p-3 border-b-2 text-red-500" @logout-btn-click="$emit('loggedOut')"/>
        </div>
    </div>
</template>

<script setup>
    import ZbNavigationTopLink from './NavigationTopLink.vue'
    import ZbLogoutButton from '../auth/LogoutButton.vue'
    defineEmits(["loggedOut"])
</script>