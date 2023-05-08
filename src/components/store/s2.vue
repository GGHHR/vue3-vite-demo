<script setup>
import {useCounterStore} from "@/assets/store";
import {ref} from "vue";
const store = useCounterStore()
console.log(store.count);


let a=ref([0,1,2,3,4,5,6,7,8])
</script>

<template>
    <div><router-link to="store">跳到store</router-link></div>
    <div><router-link to="father">跳到father</router-link></div>


     <div v-for="v in a">{{v}}</div>
</template>

<style scoped lang="scss">

</style>