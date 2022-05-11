import { getItem, setItem } from '@/utils/storage';
import variables from '@/styles/variables.scss';
import { MAIN_COLOR, DEFAULT_COLOR } from '@/constant';

export default {
    namespaced: true,
    state: () => ({
        mainColor: getItem(MAIN_COLOR) || DEFAULT_COLOR,
        variables
    }),
    mutations: {
        // 設置主題色
        setMainColor(state, newColor) {
            state.mainColor = newColor;
            state.variables.menuBg = newColor;
            setItem(MAIN_COLOR, newColor);
        }
    }
};
