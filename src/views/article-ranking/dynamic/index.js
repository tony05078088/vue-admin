/**
 * 1.動態列數據: v-for 的數據組
 * 2.被勾選的動態列數據
 * 3.table的列數據
 */

// 1.曝露出動態的列數據
import DynamicData from './DynamicData';
import { ref, watch } from 'vue';
import { watchSwitchLang } from '@/utils/i18n';
export let dynamicData = ref(DynamicData());

// 創建 被勾選的動態列數據
export let selectDynamicLabel = ref([]);

watchSwitchLang(() => {
    dynamicData.value = DynamicData();
    initSelectDynamicLabel();
});

// 預設全部勾選
const initSelectDynamicLabel = () => {
    selectDynamicLabel.value = dynamicData.value.map(item => item.label);
};

initSelectDynamicLabel();

// 聲明table的列數據
export const tableColumns = ref([]);

watch(
    selectDynamicLabel,
    val => {
        tableColumns.value = [];
        //   列數據跑回圈,從中判斷當前列是否被勾選
        const selectData = dynamicData.value.filter(item => {
            return val.includes(item.label);
        });
        tableColumns.value.push(...selectData);
    },
    {
        immediate: true
    }
);
