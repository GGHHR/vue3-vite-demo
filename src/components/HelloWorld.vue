<script setup>
import {onMounted, ref} from 'vue'
import * as echarts from 'echarts';



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
        text: 'Dynamic Data & Time Axis'
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









defineProps({
  msg: String,
})

const count = ref(0)



onMounted(()=>{

    var chartDom = document.getElementById('main');

    console.log(echarts)
    console.log(chartDom)

    var myChart = echarts.init(chartDom);
    option && myChart.setOption(option);
    setInterval(function () {
        for (var i = 0; i < 5; i++) {
            data.shift();
            data.push(randomData());
        }
        myChart.setOption({
            series: [
                {
                    data: data
                }
            ]
        });
    }, 1000);
})

console.log(count)


function count2() {
    count.value++
    console.log(count)
}
</script>

<template>

    <div id="main" style="height: 600px;width: 1000px">

    </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
