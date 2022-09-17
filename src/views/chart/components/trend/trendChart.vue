<template>
    <!-- 創建dom容器,指定大小 -->
    <div class="trend-chart-container" ref="target"></div>
</template>

<script setup>
//    導入echarts
import { onMounted, ref } from 'vue';
import * as echarts from 'echarts';

// 利用echarts.init(target) 獲取到mychart 實例
const target = ref(null);
let myChart;

onMounted(() => {
    myChart = echarts.init(target.value);
    renderChart();
});

const renderChart = () => {
    // 4. options配置config (echart渲染的核心)
    const options = {
        // 圖表標題配置
        title: {
            // 標題配置
            text: 'Echarts 入門範例'
        },
        // 圖例配置
        legend: {
            // 圖例數據
            data: ['銷量']
        },
        // x軸配置
        xAxis: {
            // 數據
            data: ['襯衫', '羊毛衫', '雪紡紗', '褲子', '高跟鞋', '襪子']
        },
        yAxis: {},
        // 圖表類型
        series: [
            {
                // 圖表名
                name: '銷量',
                // 圖表類型
                type: 'bar',
                // 數據
                data: [5, 20, 36, 10, 10, 20]
            }
        ]
    };
    // 利用mychart.setOptions方法配置options
    myChart.setOption(options);
};
</script>

<style scoped lang="scss">
.trend-chart-container {
    height: 100%;
}
</style>
