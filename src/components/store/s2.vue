<script setup>
import {useCounterStore} from "@/assets/store";
import {getCurrentInstance, ref} from "vue";
const store = useCounterStore()


/*请求*/
let{proxy}=getCurrentInstance()
proxy.$axios.get("/api/").then(() => {

}).catch((a)=>{
    console.log(a)
});






</script>

<template>

    <div>
        <router-link to="store">跳到store</router-link>
    </div>
    <div>
        <router-link to="father">跳到father</router-link>
    </div>


     <div v-for="v in a">{{v}}</div>
</template>

<style scoped lang="scss">

</style>