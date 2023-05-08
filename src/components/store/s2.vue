<script setup>
import {useCounterStore} from "@/assets/store";
const store = useCounterStore()
console.log(store.count);
</script>

<template>
    <div><router-link to="store">跳到store</router-link></div>
    <div><router-link to="father">跳到father</router-link></div>


</template>

<style scoped lang="scss">

</style>