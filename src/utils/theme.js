/**
 * 寫入新样式到 style
 * @param {*} elNewStyle  element-plus 的新樣式
 * @param {*} isNewStyleTag 是否生成新的 style 標籤
 */

import color from 'css-color-function';
import rgbHex from 'rgb-hex';
import formula from '@/constant/formula.json';
import axios from 'axios';

export const writeNewStyle = elNewStyle => {
    const style = document.createElement('style');
    style.innerText = elNewStyle;
    console.log(style);
    document.head.appendChild(style);
};
// 根據主色值,生成最新的樣式表
export const generateNewStyle = async primaryColor => {
    const colors = generateColors(primaryColor);
    let cssText = await getOriginalStyle();

    // 遍歷生成的樣式表,在css的原樣式中進行全局替換
    Object.keys(colors).forEach(key => {
        cssText = cssText.replace(new RegExp('(:|\\s+)' + key, 'g'), '$1' + colors[key]);
    });
    return cssText;
};

// 根據主色生成色值表
export const generateColors = primary => {
    if (!primary) return;
    const colors = {
        primary
    };
    Object.keys(formula).forEach(key => {
        const value = formula[key].replace(/primary/g, primary);
        colors[key] = '#' + rgbHex(color.convert(value));
    });
    return colors;
};

// 獲取當下 element-plus 預設樣式表
const getOriginalStyle = async () => {
    const version = require('element-plus/package.json').version;
    const url = `https://unpkg.com/element-plus@${version}/dist/index.css`;
    const { data } = await axios(url);
    // 把獲取到的數據選為原樣式模板
    return getStyleTemplate(data);
};

// 回傳style的template
const getStyleTemplate = data => {
    //  element-plus 預設值
    const colorMap = {
        '#3a8ee6': 'shade-1',
        '#409eff': 'primary',
        '#53a8ff': 'light-1',
        '#66b1ff': 'light-2',
        '#79bbff': 'light-3',
        '#8cc5ff': 'light-4',
        '#a0cfff': 'light-5',
        '#b3d8ff': 'light-6',
        '#c6e2ff': 'light-7',
        '#d9ecff': 'light-8',
        '#ecf5ff': 'light-9'
    };

    // 根據預設值為要替換的顏色值上標記
    Object.keys(colorMap).forEach(key => {
        const value = colorMap[key];
        data = data.replace(new RegExp(key, 'ig'), value);
    });
    return data;
};
