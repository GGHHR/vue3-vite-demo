<script setup>
import {provide, ref, watch, watchEffect} from 'vue'
import abc from     './abc.vue'

const count = ref(9999)

/*监控值变化*/
watch(count,() => {
    console.log(count.value)
})

count.value++;


</script>

<template>
    <h1>hello{{count}}</h1>
    <abc :count="count" @update:count="count = $event"></abc>
</template>

<style scoped lang="scss">


@mixin  rounded-corners (){
    color: red
}
.ft_2 {
    color: red;
    width:100 - 3px;
}
.ft_22{
    @extend .ft_2;
}
</style>
