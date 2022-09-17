<template>
    <el-card class="container" :body-style="{ padding: 0 }">
        <el-calendar v-model="currentDate" class="calendar">
            <template #dateCell="{ data }">
                <p :class="[data.isSelected ? 'is-selected' : '', calendatItemBGClass(data.day)]">
                    {{ data.day.split('-').slice(2).join('') }}
                    <br />
                    <!-- 當日金額 -->
                    <span class="todayamount" v-if="getTodayAmount(data.day) !== 0">
                        {{ getTodayAmount(data.day) }}
                    </span>
                </p>
            </template>
        </el-calendar>
    </el-card>
</template>

<script setup>
import { ref } from 'vue';
import { getChartCalendar } from '@/api/chart';
const currentDate = ref(new Date());

// 獲取數據
const calendarListData = ref([]);

const getChartCalendarListData = async () => {
    const { result } = await getChartCalendar();
    calendarListData.value = result;
};

getChartCalendarListData();

// 收益緩存數據
// key: 日期, value:金額
const dateAmountObj = ref({});

// 返回指定日期的收益數據
const getTodayAmount = date => {
    // 讀取緩存
    if (dateAmountObj.value[date]) {
        return dateAmountObj.value[date];
    }

    const todayData = calendarListData.value.find(el => el.date === date);
    if (!todayData) {
        return 0;
    }
    // 當日金額
    const todayAmount = todayData.amount;
    // 緩存數據
    dateAmountObj.value[date] = todayAmount;

    return todayAmount;
};

// 回傳日歷背景
const calendatItemBGClass = day => {
    const amount = getTodayAmount(day);
    if (amount > 0) {
        return 'profit';
    } else if (amount < 0) {
        return 'loss';
    }
    return '';
};
</script>

<style scoped lang="scss">
.container {
    height: 443px;
    .calendar {
        ::v-deep .el-calendar__body {
            padding: 0 12px 12px;
            font-size: 14px;
        }
        ::v-deep .el-calendar-day {
            height: 66px !important;
            padding: 0 !important;

            p {
                height: 100%;
                padding: 8px;
            }

            // 金額css
            .amount {
                font-size: 12px;
            }
            // 正收益
            .profit {
                background-color: #f3fff3;
                span {
                    color: #649840;
                }
            }
            // 負收益
            .loss {
                background-color: #ffe7e7;
                span {
                    color: #b65d59;
                }
            }
            .is-selected {
                background-color: #d6f2ff;
            }
        }
    }
}
</style>
