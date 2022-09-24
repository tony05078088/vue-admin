<template>
    <el-card :body-style="{ padding: 0 }"> <div class="container" ref="target"></div></el-card>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getChartWordCloud } from '@/api/chart';
// import { useI18n } from 'vue-i18n';
import * as echarts from 'echarts';
import { randomRGB } from '@/utils/colors';
import 'echarts-wordcloud';
import { watchSwitchLang } from '@/utils/i18n';

// const i18n = useI18n();
// 獲取數據
const wordcloud = ref([]);
const getCloudData = async () => {
    const res = await getChartWordCloud();
    wordcloud.value = res;
    console.log(res);
    // 渲染圖表
    renderChart();
};
getCloudData();
const target = ref(null);
let mChart = null;
onMounted(() => {
    mChart = echarts.init(target.value);
});

// 渲染圖表
const renderChart = () => {
    const options = {
        title: {
            // text: i18n.t('msg.chart.cloudChartTitle')
            text: '關鍵字查詢'
        },
        series: [
            {
                // 類型
                type: 'wordCloud',
                //  數據映射文字的大小範圍
                sizeRange: [4, 80],
                // 文字旋轉範圍
                rotationRange: [0, 0],
                // 每單字間距
                gridSize: 0,
                // 渲染動畫
                layoutAnimation: true,
                // 字體
                textStyle: {
                    // 顏色
                    color: randomRGB
                },
                emphasis: {
                    textStyle: {
                        fontWeight: 'bold',
                        color: '#000'
                    }
                },
                data: wordcloud.value
            }
        ]
    };
    mChart.setOption(options);
};
watchSwitchLang(renderChart);
</script>

<style scoped lang="scss">
.container {
    height: 240px;
}
</style>
