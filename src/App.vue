<script setup>
import Head from "@/components/Head.vue";
import {watch_router} from "@/assets/js/common";


watch_router(function (newValue, oldValue) {
    console.log(newValue, oldValue)
})
</script>

<template>
  <Head></Head>
  <router-view></router-view>
</template>

<style  lang="scss">
@import 'element-plus/dist/index.css';
@import "@/assets/css/index.scss";


</style>
