import { getItem, setItem } from '@/utils/storage';

import { MAIN_COLOR, DEFAULT_COLOR } from '@/constant';

export default {
    namespace: true,
    state: () => ({
        mainColor: getItem(MAIN_COLOR) || DEFAULT_COLOR
    }),
    mutations: {
        // 設置主題色
        setMainColor(state, newColor) {
            state.mainColor = newColor;
            setItem(MAIN_COLOR, newColor);
        }
    }
};
