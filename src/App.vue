<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { inject,ref} from 'vue'

console.log(inject('message'))

 let msg=ref(1)

function msgFn(data) {
    msg.value+=data
}

console.log(process.env.NODE_ENV)
</script>

<template>
  <HelloWorld  :msg='msg' @msgFn="msgFn"/>
</template>

<style scoped lang="scss">
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
