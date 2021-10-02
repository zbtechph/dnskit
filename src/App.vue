<template>
  <div>
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link :to="{ name: 'account' }">Account</router-link>
    <router-link :to="{ name: 'login' }">Login</router-link>
    <router-link :to="{ name: 'register' }">Register</router-link>
  </div>
  <router-view/>
</template>