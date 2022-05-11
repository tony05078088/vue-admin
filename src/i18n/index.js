import { createI18n } from 'vue-i18n';
import store from '@/store';
import zhLocale from './lang/zh';
import enLocale from './lang/en';
import twLocale from './lang/tw';
// 創建數據源
const messages = {
    en: {
        msg: {
            ...enLocale
        }
    },
    zh: {
        msg: {
            ...zhLocale
        }
    },
    tw: {
        msg: {
            ...twLocale
        }
    }
};

// 創建locale語言變數
//const locale = 'tw';

//緩存當前lang
function getLanguage() {
    // console.log(store && store.getters && store.getters.language);
    return store?.getters?.language;
}

//初始化i18n實例
const i18n = createI18n({
    // 使用composition API
    legacy: false,
    // 全局使用t函數
    globalInjection: true,
    locale: getLanguage(),
    messages
});

export default i18n;
