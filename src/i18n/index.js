import { createI18n } from 'vue-i18n';

// 創建數據源
const messages = {
    en: {
        msg: {
            test: 'hello world'
        }
    },
    zh: {
        msg: {
            test: '哈囉 世界'
        }
    }
};
// 創建locale語言變數
const locale = 'zh';

//初始化i18n實例
const i18n = createI18n({
    // 使用composition API
    legacy: false,
    // 全局使用t函數
    globalInjection: true,
    locale,
    messages
});

export default i18n;
