<template>
    <header class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">zb.dns</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <zb-navigation-top-link :to="{ name: 'home' }">Home</zb-navigation-top-link>
                    <zb-navigation-top-link :to="{ name: 'account' }">Account</zb-navigation-top-link>
                    <zb-logout-button @logout-btn-click="$emit('loggedOut')"/>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
    import ZbNavigationTopLink from './NavigationTopLink.vue'
    import ZbLogoutButton from '../auth/LogoutButton.vue'
    defineEmits(["loggedOut"])
</script>