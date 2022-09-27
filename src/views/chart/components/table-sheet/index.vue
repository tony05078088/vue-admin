<template>
    <el-row :gutter="20">
        <el-col :span="18">
            <s2-vue />
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
import { getChartRegions } from '@/api/chart';
import { watchSwitchLang } from '@/utils/i18n';

// 獲取區域數據
const regionData = ref([]);
const getChartRegionData = async () => {
    const { regions } = await getChartRegions();
    regionData.value = regions;
};
getChartRegionData();
watchSwitchLang(getChartRegionData);

// 選中
const currentIndex = ref(0);
const onChangeIndex = index => {
    currentIndex.value = index;
};
</script>

<style scoped lang="scss">
.mb-20 {
    margin-bottom: 20px;
}
</style>
