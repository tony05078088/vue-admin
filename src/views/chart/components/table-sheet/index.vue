<template>
    <el-row :gutter="20">
        <el-col :span="18">
            <s2-vue :data="sheetData" />
        </el-col>
        <el-col :span="6">
            <sheet-label-vue
                v-for="(item, index) in regionData"
                :key="item"
                class="mb-20"
                :data="item"
                :isSelected="currentIndex === index"
                @click="onChangeIndex(index)"
            />
        </el-col>
    </el-row>
</template>

<script setup>
import s2Vue from './components/s2.vue';
import sheetLabelVue from './components/sheet-label.vue';
import { ref } from 'vue';
import { getChartRegions, getChartSheets } from '@/api/chart';
import { watchSwitchLang } from '@/utils/i18n';

// 獲取區域數據
const regionData = ref([]);
const getChartRegionData = async () => {
    const { regions } = await getChartRegions();
    regionData.value = regions;
    getChartSheetData(regionData.value[0].id);
};
getChartRegionData();
watchSwitchLang(getChartRegionData);

// 選中
const currentIndex = ref(0);
const onChangeIndex = index => {
    currentIndex.value = index;
    // 切換區域時,重新獲取表格數據
    getChartSheetData(regionData.value[currentIndex.value].id);
};

// 區域對應的表格數據
const sheetData = ref([]);
const getChartSheetData = async id => {
    const res = await getChartSheets(id);
    sheetData.value = res;
};
</script>

<style scoped lang="scss">
.mb-20 {
    margin-bottom: 20px;
}
</style>
