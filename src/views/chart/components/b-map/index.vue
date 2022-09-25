<template>
    <el-card class="container">
        <div class="title">{{ $t('msg.chart.bmapChartTitle') }}</div>
        <div ref="target" class="box">地圖可視化</div>
    </el-card>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getChartMap } from '@/api/chart';
// 導入bmap module
import 'echarts/extension/bmap/bmap.js';
import * as echarts from 'echarts';
import { useI18n } from 'vue-i18n';

const i18n = useI18n();

const chartData = ref({});
const getChartData = async () => {
    const result = await getChartMap();
    chartData.value = result;
    console.log(chartData.value);
    renderbMap();
};

getChartData();

// 篩選數據
const convertStructure = data => {
    const res = [];
    data.forEach(el => {
        const location = chartData.value.geoCoordMap[el.name];
        if (location) {
            res.push({
                name: el.name,
                value: [...location, el.value]
            });
        }
    });
    return res;
};

const target = ref(null);
let mChart;
onMounted(() => {
    mChart = echarts.init(target.value);
});

// 渲染
const renderbMap = () => {
    const options = {
        tooltip: {
            trigger: 'item'
        },
        // 地圖設定
        bmap: {
            // 中心點
            center: [109.114129, 36.550339],
            // 縮放
            zoom: 5,
            // 可否拖動
            roam: true
        },
        series: [
            {
                name: `營收(${i18n.t('msg.chart.unit')})`,
                // 散點圖
                type: 'scatter',
                coordinateSystem: 'bmap',
                data: convertStructure(chartData.value.data),
                // 散點的大小
                symbolSize: val => {
                    return val[2] / 10;
                },
                encode: {
                    value: 2
                },
                emphasis: {
                    label: {
                        show: true
                    }
                },
                color: '#15803d'
            },
            {
                name: `營收Top 5 (${i18n.t('msg.chart.unit')})`,
                type: 'effectScatter',
                coordinateSystem: 'bmap',
                data: convertStructure(
                    chartData.value.data
                        .sort((a, b) => {
                            return b.value - a.value;
                        })
                        .slice(0, 6)
                ),
                // 散點的大小
                symbolSize: val => {
                    return val[2] / 10;
                },
                encode: {
                    value: 2
                },
                rippleEffect: {
                    brushType: 'stroke'
                },
                label: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                },
                zlevel: 2,
                color: '#166534'
            }
        ]
    };
    mChart.setOption(options);
};
</script>

<style scoped lang="scss">
.container {
    position: relative;
    .title {
        position: absolute;
        top: 28px;
        margin-left: 50%;
        transform: translate((-50%));
        color: #333;
        font-size: 22px;
        font-weight: bold;
        z-index: 9;
    }
    .box {
        height: 462px;
    }
}
</style>
