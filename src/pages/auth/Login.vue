<template>
    <div class="flex flex-wrap md:h-screen text-gray-500">
        <div class="w-full bg-no-repeat bg-cover h-52 md:w-1/2 md:h-full" style="background-image:url('https://i.ibb.co/mHy7W9t/ivana-cajina-d-Qej-X2uc-PBs-unsplash.jpg')"></div>
        <div class="w-full md:w-1/2 md:order-first p-8">
            <div class="py-8">
                <h1 class="text-4xl font-semibold text-gray-600">Welcome back!</h1>
                <p class="text-gray-400">Login to start using our services.</p>
            </div>
            <div class="flex">
                <button type="button" class="w-full bg-blue-500 text-blue-100 p-3 rounded font-bold">Log in with Google</button>
            </div>
            <zb-login-form/>
        </div>
    </div>
</template>

<script setup>
import ZbLoginForm from '../../components/auth/LoginForm.vue'
</script>