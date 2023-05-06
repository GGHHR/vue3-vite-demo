<script setup>
import {provide, ref, watchEffect} from 'vue'
import abc from     './abc.vue'
// console.log(useRoute().query)
// useRouter().push('/users/eduardo')
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


provide(/* 注入名 */ 'message', /* 值 */ 'hello!')


const count = ref(9999)

watchEffect(() => {
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
