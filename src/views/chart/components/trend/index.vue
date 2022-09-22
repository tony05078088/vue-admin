<template>
    <el-card class="container">
        <el-row :gutter="32" v-if="ChartData.allAmount">
            <el-col :span="6">
                <!-- 數據部分 -->
                <trend-data :data="ChartData" />
            </el-col>
            <el-col :span="18">
                <!-- 圖表部分 -->
                <trend-chart :data="ChartData" />
            </el-col>
        </el-row>
    </el-card>
</template>

<script setup>
import trendChart from './trendChart.vue';
import trendData from './trendData.vue';
import { getChartTrend } from '@/api/chart';
import { ref } from 'vue';

const ChartData = ref({});
const getChartTrendData = async () => {
    const res = await getChartTrend();
    ChartData.value = res;
};

getChartTrendData();
</script>

<style scoped lang="scss">
.container {
    height: 286px;
}
</style>
