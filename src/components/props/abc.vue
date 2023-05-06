<template>
    <div>
        231
    </div>
    <div @click="add">{{ count }}</div>
</template>

<script setup>
import { inject, defineProps, defineEmits } from "vue";

const props = defineProps({
    count: Number,
});

const emit = defineEmits(['update:count']);

function add() {
    emit('update:count', props.count + 1)
}

console.log(inject('message'));
</script>

<style scoped>
</style>
