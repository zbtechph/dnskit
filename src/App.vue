<template>
  <zb-navigation-top v-if="user" @logged-out="redirectOnLogout"/>
  <router-view/>
</template>

<script setup>
  import { computed, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  import { useStore } from 'vuex'
  import ZbNavigationTop from './components/ui/NavigationTop.vue'

  const store = useStore();
  const router = useRouter();
  const user = computed(()=>store.state.session.user)
  
  onMounted(()=>{
    store.dispatch("session/authStateObserver");
  })

  const redirectOnLogout = () => {
    router.push( { name: "login" } )
  }

  

</script>