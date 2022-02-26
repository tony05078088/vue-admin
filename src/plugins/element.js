import ElementPlus from 'element-plus';

//import 'element-plus/lib/theme-chalk/index.css';
import 'element-plus/dist/index.css';
// import zhTW from 'element-plus/lib/locale/lang/zh-tw';
// import en from 'element-plus/lib/locale/lang/en';
// import store from '@/store';

export default app => {
    // app.use(ElementPlus, { locale: store.getters.language === 'en' ? en : zhTW });
    app.use(ElementPlus);
};
