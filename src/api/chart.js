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
