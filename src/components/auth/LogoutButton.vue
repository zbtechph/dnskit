<template>
    <button class="btn btn-danger" type="button" @click="btnClick">
        <slot>Logout</slot>
    </button>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()

const emit = defineEmits(["logoutBtnClick"])

const btnClick = async () => {
    await store.dispatch("session/logout");
    emit("logoutBtnClick");
}

</script>