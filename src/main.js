import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';
import installElementPlus from './plugins/element';
// 初始化css
import '@/styles/index.scss';
// 導入svgIcon
import installIcons from '@/icons';

//導入路由鑑權
import './permission';

// 全局屬性
import installFilter from '@/filter';

const app = createApp(App);
installIcons(app);
installElementPlus(app);
installFilter(app);
app.use(store).use(router).use(i18n).mount('#app');
