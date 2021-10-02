<template>
    <button type="button" :class="classes" @click="btnClick"><slot>Logout</slot></button>
</template>

<script setup>
const props = defineProps({
    classes: {
        type: [ String, Array ]
    }
})

const btnClick = () => {
    alert("Logout button click!")
}

</script>