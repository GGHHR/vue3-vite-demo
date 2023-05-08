<script setup>
import {useCounterStore} from "@/assets/store";
const store = useCounterStore()
console.log(store.count);
</script>

<template>
    <router-link to="store">跳到store</router-link>
</template>

<style scoped lang="scss">

</style>