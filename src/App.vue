<template>
  <zb-navigation-top v-if="user"/>
  <router-view/>
</template>

<script setup>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import ZbNavigationTop from './components/ui/NavigationTop.vue'

  const store = useStore();
  const user = computed(()=>store.state.session.user)
  
</script>