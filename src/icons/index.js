// 1.導入全部svg 圖標
import SvgIcon from '@/components/SvgIcon';

const svgRequire = require.context('./svg', false, /\.svg$/);

// 此時回傳Require函數 可以接收一個request的參數 用於require的導入
// 此函數提供三個屬性 可以通過svgRequire.keys() 獲得所有的svg圖標
// 迴圈圖標,把圖標作為request 參數傳入到 svgRequire 導入函數中 完成本地svg圖標的導入

svgRequire.keys().forEach(svgIcon => svgRequire(svgIcon));

// 2.完成SvgIcon全局註冊
export default app => {
    app.component('svg-icon', SvgIcon);
};
