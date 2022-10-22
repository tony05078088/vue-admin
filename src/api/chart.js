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
// 圓餅圖
export const getChartPie = () => {
    return request({
        url: '/chart/pie'
    });
};

// 文檔雲圖
export const getChartWordCloud = () => {
    return request({
        url: '/chart/wordcloud'
    });
};

// 地圖可視化
export const getChartMap = () => {
    return request({
        url: '/chart/bmap'
    });
};

// 獲取區域數據
export const getChartRegions = () => {
    return request({
        url: '/chart/regions'
    });
};

// 表格數據
export const getChartSheets = regionId => {
    return request({
        url: '/chart/sheets',
        params: {
            regionId
        }
    });
};
