<template>
    <button type="button" :class="classes" @click="btnClick">
        <slot>Logout</slot>
    </button>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()

const props = defineProps({
    classes: {
        type: [String, Array]
    }
})

const emit = defineEmits(["logoutBtnClick"])

const btnClick = async () => {
    await store.dispatch("session/logout");
    emit("logoutBtnClick");
}

</script>