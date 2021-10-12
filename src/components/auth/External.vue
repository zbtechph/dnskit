<template>
    <div>
        <p class="text-muted" v-text="props.title"></p>
        <div class="row gap-2 px-2">
            <button
                v-for="item in authItems"
                type="button"
                class="btn col-2"
                :title="getProvider(item)"
                :class="getBtnColor(item)"
                @click="store.dispatch('session/loginWith', getProvider(item))"
            ><i :class="`bi-${getProvider(item)}`"></i></button>
        </div>
    </div>
</template>

<script setup>
    import { useStore } from 'vuex'

    const props = defineProps({
        title: String,
    })

    const store = useStore();
    const authItems = import.meta.env.VITE_EXTERNAL_AUTH.split(',')
    const getProvider = ( authItem ) => authItem.split('-')[0]
    const getBtnColor = ( authItem ) => "btn-"+authItem.split('-')[1]

</script>