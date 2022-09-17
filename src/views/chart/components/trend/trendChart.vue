<template>
    <!-- 創建dom容器,指定大小 -->
    <div class="trend-chart-container" ref="target"></div>
</template>

<script setup>
//    導入echarts
import { onMounted, ref, defineProps } from 'vue';
import * as echarts from 'echarts';

const props = defineProps({
    data: {
        type: Object,
        required: true
    }
});

// 利用echarts.init(target) 獲取到mychart 實例
const target = ref(null);
let myChart;

onMounted(() => {
    myChart = echarts.init(target.value);
    renderChart();
});

const renderChart = () => {
    // 4. options配置config (echart渲染的核心)
    // const options = {
    //     // 圖表標題配置
    //     title: {
    //         // 標題配置
    //         text: 'Echarts 入門範例'
    //     },
    //     // 圖例配置
    //     legend: {
    //         // 圖例數據
    //         data: ['銷量']
    //     },
    //     // x軸配置
    //     xAxis: {
    //         // 數據
    //         data: ['襯衫', '羊毛衫', '雪紡紗', '褲子', '高跟鞋', '襪子']
    //     },
    //     yAxis: {},
    //     // 圖表類型
    //     series: [
    //         {
    //             // 圖表名
    //             name: '銷量',
    //             // 圖表類型
    //             type: 'bar',
    //             // 數據
    //             data: [5, 20, 36, 10, 10, 20]
    //         }
    //     ]
    // };

    const options = {
        //滑鼠移入後展示提示框
        tooltip: {
            // 滑鼠移入至座標軸時,觸發提示
            trigger: 'axis',
            // 移入座標軸時,提示框展示內容的配置
            axisPointer: {
                // 顯示十字準星
                type: 'cross',
                // 指示器樣式
                crossStyle: {
                    color: '#999'
                }
            }
        },
        // 圖例配置
        legend: {
            data: ['月累計收益', '日收益曲線'],
            // 圖例展示位置
            right: 0
        },
        // echarts 網格繪製位置
        grid: {
            top: 20,
            right: 0,
            bottom: 0,
            left: 0,
            // 計算邊距時,包含標籤
            containLabel: true
        },
        // x軸配置
        xAxis: {
            // 座標軸類型
            type: 'category',
            // 座標軸數據
            data: props.data.monthAmountList.map(el => el.time),
            // 刻度尺
            axisTick: {
                show: false
            }
        },
        // Y軸配置
        yAxis: {
            // 座標軸類型
            type: 'value',
            // 最小值
            min: 0,
            // 最大值
            max: function (value) {
                console.log(value);
                return parseInt(value.max * 1.2);
            },
            // 刻度上展現的單位
            axisLabel: {
                formatter: '{value}萬元'
            }
        },
        // 圖表配置
        series: [
            {
                //柱狀圖
                type: 'bar',
                // 圖表名字對應圖例
                name: '月累計收益',
                barWidth: 20,
                // 提示框的展示內容
                tooltip: {
                    valueFormattor: function (value) {
                        return value + '萬元';
                    }
                },
                data: props.data.monthAmountList.map(el => el.amount)
            },
            {
                //曲線圖
                type: 'line',
                //顏色
                color: '#6EC6D0',
                // 平滑曲線
                smooth: true,
                // 圖表名字對應圖例
                name: '日收益曲線',

                // 提示框的展示內容
                tooltip: {
                    valueFormattor: function (value) {
                        return value + '萬元';
                    }
                },
                data: props.data.dailyCurve.map(el => el.amount)
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
