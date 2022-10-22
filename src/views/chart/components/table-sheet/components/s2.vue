<template>
    <el-card :body-style="{ padding: 0 }"> <div class="container" ref="target"></div> </el-card>
</template>

<script setup>
import { defineProps, ref, onMounted, watch } from 'vue';
import { TableSheet } from '@antv/s2';
import { useI18n } from 'vue-i18n';

const i18n = useI18n();

const props = defineProps({
    data: {
        type: Array,
        required: true
    }
});

const target = ref(null);
let s2;
onMounted(() => {
    const s2Options = {
        width: target.value.clientWidth,
        height: target.value.clientHeight,
        // 是否顯示行號
        showSeriesNumber: true,
        conditions: {
            background: [
                {
                    // 設置背景字段
                    field: 'balance',
                    // 映射函數
                    mapping(fieldValue) {
                        console.log(fieldValue);
                        return {
                            fill: fieldValue > 0 ? '#f3fff3' : '#ffe7e7'
                        };
                    }
                }
            ]
        }
    };
    s2 = new TableSheet(target.value, {}, s2Options);
});

// 圖表渲染方法
const renderChart = () => {
    const s2DataConfig = {
        fields: {
            columns: ['province', 'city', 'coverage', 'receivable', 'actual', 'balance']
        },
        meta: [
            {
                field: 'province',
                name: i18n.t('msg.chart.sheetProvince')
            },
            {
                field: 'city',
                name: i18n.t('msg.chart.sheetCity')
            },
            {
                field: 'Coverage',
                name: i18n.t('msg.chart.sheetCoverage')
            },
            {
                field: 'receivable',
                name: i18n.t('msg.chart.sheetReceivable')
            },
            {
                field: 'actual',
                name: i18n.t('msg.chart.sheetActual')
            },
            {
                field: 'balance',
                name: i18n.t('msg.chart.sheetBalance')
            }
        ],
        data: props.data
    };
    // 更新數據
    s2.setDataCfg(s2DataConfig);
    // 重新觸發render函數,但此時須在render中傳遞true,表示數據發生變化
    s2.render(true);
};

watch(
    () => props.data,
    () => {
        renderChart();
    }
);
</script>

<style scoped lang="scss">
.container {
    height: 782px;
}
</style>
