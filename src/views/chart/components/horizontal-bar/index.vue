<template>
    <el-card :body-style="{ padding: '12px' }">
        <div class="container" ref="target"></div>
    </el-card>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getChartTimeAmount } from '@/api/chart';
import * as echarts from 'echarts';
import { useI18n } from 'vue-i18n';

const i18n = useI18n();
const data = ref([]);
const getData = async date => {
    const { result } = await getChartTimeAmount(date);
    data.value = result;
    console.log(result);
    renderChart();
};

getData(new Date());

// 圖表初始化
const target = ref(null);
let mCharts;
onMounted(() => {
    mCharts = echarts.init(target.value);
});

const renderChart = () => {
    const options = {
        // 滑鼠移入後的提示框配置
        tooltip: {
            // 滑鼠移入到座標軸時,觸發提示框
            trigger: 'axis',
            // 移入座標軸時，提示框的配置項
            axisPointer: {
                // 展示陰影
                type: 'shadow'
            }
        },
        // 圖例配置
        legend: {
            data: [
                `${i18n.t('msg.chart.income')} ${i18n.t('msg.chart.unit')}`,
                `${i18n.t('msg.chart.expend')} ${i18n.t('msg.chart.unit')}`,
                `${i18n.t('msg.chart.balance')} ${i18n.t('msg.chart.unit')}`
            ],
            right: 0
        },
        grid: {
            top: 28,
            right: 10,
            bottom: 0,
            left: 0,
            containLabel: true
        },
        // x軸配置
        xAxis: {
            type: 'value'
        },
        // y軸配置
        yAxis: {
            type: 'category',
            axisTick: {
                // 不顯示座標軸刻度
                show: false
            },
            data: data.value.map(el => el.timeStr),
            inverse: true
        },
        // 圖表類型
        series: [
            {
                name: `${i18n.t('msg.chart.income')} ${i18n.t('msg.chart.unit')}`,
                type: 'bar',
                stack: 'total',
                label: {
                    show: true,
                    position: 'right'
                },
                color: '#6DC473',
                emphasis: {
                    focus: 'series'
                },
                data: data.value.map(el => el.income)
            },
            {
                name: `${i18n.t('msg.chart.expend')} ${i18n.t('msg.chart.unit')}`,
                type: 'bar',
                stack: 'total',
                label: {
                    show: true,
                    position: 'right'
                },
                color: '#E47470',
                emphasis: {
                    focus: 'series'
                },
                data: data.value.map(el => el.expense)
            },
            {
                name: `${i18n.t('msg.chart.balance')} ${i18n.t('msg.chart.unit')}`,
                type: 'bar',
                label: {
                    show: true,
                    position: 'inside'
                },
                color: '#83C0DF',
                emphasis: {
                    focus: 'series'
                },
                data: data.value.map(el => el.balance)
            }
        ]
    };

    mCharts.setOption(options);
};
</script>

<style scoped lang="scss">
.container {
    height: 418px;
}
</style>
