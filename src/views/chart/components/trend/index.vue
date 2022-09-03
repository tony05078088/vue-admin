<template>
    <el-card class="container">
        <el-row :gutter="32">
            <el-col :span="6">
                <!-- 數據部分 -->
                <trend-data />
            </el-col>
            <el-col :span="18">
                <!-- 圖表部分 -->
                <trend-chart />
            </el-col>
        </el-row>
    </el-card>
</template>

<script setup>
import trendChart from './trendChart.vue';
import trendData from './trendData.vue';
</script>

<style scoped lang="scss">
.container {
    height: 286px;
    background-color: #bcbfc3;
}
</style>
