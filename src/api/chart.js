import request from '@/utils/request';

// 累計收益明細

export const getChartTrend = () => {
    return request({
        url: '/chart/trend'
    });
};

// 日曆圖示數據

export const getChartCalendar = () => {
    return request({
        url: '/chart/calendar'
    });
};

// 指定日期時段柱形數據
export const getChartTimeAmount = date => {
    return request({
        url: '/chart/time/amount',
        params: {
            date
        }
    });
};
