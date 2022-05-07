import dayjs from 'dayjs';
import rt from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/zh-cn';
import store from '@/store';

export const dateFilter = (val, format = 'YYYY-MM-DD') => {
    if (!isNaN(val)) {
        val = parseInt(val);
    }
    return dayjs(val).format(format);
};

// 相對時間
dayjs.extend(rt);

function relativeTime(val) {
    if (isNaN(val)) {
        val = parseInt(val);
    }
    return dayjs()
        .locale(store.getters.language === 'tw' ? 'zh-cn' : 'en')
        .to(dayjs(val));
}

export default app => {
    app.config.globalProperties.$filters = {
        dateFilter,
        relativeTime
    };
};
