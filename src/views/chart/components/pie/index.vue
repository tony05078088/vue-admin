<template>
    <el-card :body-style="{ padding: 0 }"> </el-card>
    <div class="container" ref="target">圓餅圖</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
import { getChartPie } from '@/api/chart';
import { useI18n } from 'vue-i18n';
import { watchSwitchLang } from '@/utils/i18n';
const i18n = useI18n();
const chartData = ref([]);
const getChartData = async () => {
    const result = await getChartPie();
    chartData.value = result;
    renderPie(result);
};
getChartData();

//  圖表初始化
const target = ref(null);
let mPie;
onMounted(() => {
    mPie = echarts.init(target.value);
});

const renderPie = () => {
    const options = {
        title: {
            text: i18n.t('msg.chart.pieChartTitle')
        },
        tooltip: {
            trigger: 'item',
            formatter: `{b}:{c} ${i18n.t('msg.chart.unit')}`
        },
        series: [
            {
                type: 'pie',
                radius: ['30%', '70%'],
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: false,
                    formatter: '{b}: {d}%',
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '22',
                        fontWeight: 'bold'
                    }
                },
                data: chartData.value
            }
        ]
    };
    mPie.setOption(options);
};
watchSwitchLang(getChartData);
</script>

<style scoped lang="scss">
.container {
    width: 100%;
    height: 240px;
}
</style>
