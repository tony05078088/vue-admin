import request from '@/utils/request';

// 累計收益明細

export const getChartTrend = () => {
    return request({
        url: '/chart/trend'
    });
};
