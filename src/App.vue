<script setup>
import { ref} from 'vue'


let msg=ref(1)

function msgFn(data) {
    msg.value+=data
}

</script>

<template>
    <router-view>  </router-view>
</template>

<style  lang="scss">
@import 'element-plus/dist/index.css';
@import  "./assets/css/initcss.scss";
@import './assets/css/style.css';


.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
