<template>
    <div class="chart-container">
        <!-- 累計收益趨勢圖 -->
        <trend />
        <!-- 第二行 -->
        <el-row class="mt-20" :gutter="20">
            <el-col :span="16">
                <!-- 日金額分析圖 -->
                <horizontal />
            </el-col>
            <el-col :span="8">
                <!-- 日曆圖 -->
                <calendar />
            </el-col>
        </el-row>
        <!-- 第三行 -->
        <el-row class="mt-20" :gutter="20">
            <el-col :span="6">
                <div>
                    <!-- 圓餅圖 -->
                    <pie />
                    <!-- 文檔案雲圖 -->
                    <wordCloud class="mt-20" />
                </div>
            </el-col>
            <el-col :span="18">
                <!-- 地圖可視化 -->
                <bmap />
            </el-col>
        </el-row>
        <!-- 表格數據 -->
        <tablesheet class="mt-20" />
    </div>
</template>

<script setup>
import trend from './components/trend/index.vue';
import horizontal from './components/horizontal-bar/index.vue';
import calendar from './components/calendar/index.vue';
import pie from './components/pie/index.vue';
import wordCloud from './components/word-cloud/index.vue';
import bmap from './components/b-map/index.vue';
import tablesheet from './components/table-sheet/index.vue';
</script>

<style scoped lang="scss">
.mt-20 {
    margin-top: 20px;
}
</style>
