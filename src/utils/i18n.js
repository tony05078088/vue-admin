import { watch } from 'vue';
import i18n from '@/i18n';
import store from '../store';

// 監聽語言變化,同時執行cb
export function watchSwitchLang(...cbs) {
    watch(
        // 觀察語言
        () => store.getters.language,
        () => {
            //回調函數
            console.log(cbs);
            cbs.forEach(cb => cb(store.getters.language));
        }
    );
}

export function generateTitle(title) {
    return i18n.global.t('msg.route.' + title);
}
