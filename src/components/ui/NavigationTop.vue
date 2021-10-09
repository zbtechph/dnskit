<template>
    <div class="shadow flex flex-row md:justify-center">
        <div class="flex md:w-2/3 items-center">
            <zb-navigation-top-link :to="{ name: 'home' }">Home</zb-navigation-top-link>
            <zb-navigation-top-link :to="{ name: 'account' }">Account</zb-navigation-top-link>
            <zb-logout-button classes="p-3 border-b text-red-500" @logout-btn-click="$emit('loggedOut')"/>
        </div>
    </div>
</template>

<script setup>
    import ZbNavigationTopLink from './NavigationTopLink.vue'
    import ZbLogoutButton from '../auth/LogoutButton.vue'
    defineEmits(["loggedOut"])
</script>