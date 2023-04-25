<script setup>
import {onMounted, ref, toRefs, watchEffect} from 'vue'
import {useRoute, useRouter} from "vue-router";

console.log(useRoute().query)
useRouter().push('/users/eduardo')
function randomData() {
    now = new Date(+now + oneDay);
    value = value + Math.random() * 21 - 10;
    return {
        name: now.toString(),
        value: [
            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
            Math.round(value)
        ]
    };
}
let data = [];
let now = new Date(1997, 9, 3);
let oneDay = 24 * 3600 * 1000;
let value = Math.random() * 1000;
for (var i = 0; i < 1000; i++) {
    data.push(randomData());
}
var option;
option = {
    title: {
        text: ''
    },
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            params = params[0];
            var date = new Date(params.name);
            return (
                date.getDate() +
                '/' +
                (date.getMonth() + 1) +
                '/' +
                date.getFullYear() +
                ' : ' +
                params.value[1]
            );
        },
        axisPointer: {
            animation: false
        }
    },
    xAxis: {
        type: 'time',
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
            show: false
        }
    },
    series: [
        {
            name: 'Fake Data',
            type: 'line',
            showSymbol: false,
            data: data
        }
    ]
};





const count = ref(0)

watchEffect(() => {

    console.log(count.value)
})
count.value++;



let props=defineProps({
    msg: 'number',
})

const emit = defineEmits(['msgFn'])



</script>

<template>
    <div class="ft_2">{{msg}}</div>
    <div class="ft_22" @click=" emit('msgFn',3)">+</div>
    <div id="main" style="height: 600px;width: 1000px">
    </div>
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
