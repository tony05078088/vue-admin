import ElementPlus from 'element-plus';

//import 'element-plus/lib/theme-chalk/index.css';
import 'element-plus/dist/index.css';
import locale from 'element-plus/lib/locale/lang/zh-tw';

export default app => {
    app.use(ElementPlus, { locale });
};