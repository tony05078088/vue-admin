<template>
    <div class="trend-data-container">
        <!-- 累計盈利 -->
        <div class="title">
            <div class="title-name">
                {{ $t('msg.chart.trendDataTitle') }}
            </div>
            <div class="title-amount">
                &yen;
                <span ref="titleAmountTarget">{{ data.allAmount }}</span>
            </div>
        </div>
    </div>
    <!-- 今日新增收益 -->
    <div class="item">
        <div class="item-name item-name-border-1">
            {{ $t('msg.chart.trendDataTadayAdded') }}
        </div>
        <div class="item-amount">
            <span ref="todayAddedTarget" class="item-amount-number">
                {{ data.tadayAdded }}
            </span>
            {{ $t('msg.chart.unit') }}
        </div>
    </div>
    <!-- 今日新增支出 -->
    <div class="item">
        <div class="item-name item-name-border-2">
            {{ $t('msg.chart.trendDataTadayExpend') }}
        </div>
        <div class="item-amount">
            <span ref="todayExpendTarget" class="item-amount-number">
                {{ data.tadaySub }}
            </span>
            {{ $t('msg.chart.unit') }}
        </div>
    </div>
    <!-- 今日結餘 -->
    <div class="item">
        <div class="item-name item-name-border-3">
            {{ $t('msg.chart.trendDataTadayBalance') }}
        </div>
        <div class="item-amount">
            <span ref="todayBalanceTarget" class="item-amount-number">
                {{ data.tadayAmount }}
            </span>
            {{ $t('msg.chart.unit') }}
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref, onMounted } from 'vue';
import { CountUp } from 'countup.js';
const props = defineProps({
    data: {
        type: Object,
        required: true
    }
});

// 本月累計收益
const titleAmountTarget = ref(null);
// 今日新增收益
const todayAddedTarget = ref(null);
// 今日新增支出
const todayExpendTarget = ref(null);
// 今日結餘
const todayBalanceTarget = ref(null);

onMounted(() => {
    const options = {
        // 小數點位數:
        decimalPlaces: 2,
        // 持續時間:
        duration: 1.5
    };
    // 本月累計收益
    new CountUp(titleAmountTarget.value, props.data.allAmount, options).start();
    // 本月新增收益
    new CountUp(todayAddedTarget.value, props.data.tadayAdded, options).start();
    // 本月新增支出
    new CountUp(todayExpendTarget.value, props.data.tadaySub, options).start();
    // 今日結餘
    new CountUp(todayBalanceTarget.value, props.data.tadayAmount, options).start();
});
</script>

<style scoped lang="scss">
.trend-data-container {
    padding: 12px;
    background: linear-gradient(to right, #0ea5e9, #6366f1);
    border-radius: 5px;
    color: white;
    .title-name {
        font-size: 12px;
        font-weight: bold;
    }
    .title-amount {
        font-size: 24px;
        margin-top: 4px;
    }
}
.item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #c9c9c9;
    padding: 16px 0;
    color: #666;
    .item-name {
        font-size: 12px;
        padding: 4px 0 4px 8px;
    }
    .item-amount {
        font-size: 12px;
        &-number {
            color: #333;
            font-weight: bold;
            font-size: 20px;
        }
    }
    .item-name-border-1 {
        border-left: 6px solid #409eff;
    }
    .item-name-border-2 {
        border-left: 6px solid #e6a23c;
    }
    .item-name-border-3 {
        border-left: 6px solid #67c23a;
    }
}
</style>
