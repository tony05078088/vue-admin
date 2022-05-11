const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    //webpack devServer 提供代理功能, 該功能 可將所有請求到當前server的請求代理到另外的一個server
    devServer: {
        //配置反向代理
        proxy: {
            // 當地址中有/api的時候會觸發代理機制
            '/api': {
                //要代理的server地址 這裡不用寫api
                target: 'https://api.imooc-admin.lgdsunday.club/',
                changeOrigin: true // 是否跨域
            }
        }
    },
    chainWebpack(config) {
        //設置svg-sprite-loader
        //config為webpack配置對象
        //config.module 表示創建一個具名規則 以後用來修改規則

        config.module
            // 規則
            .rule('svg')
            // 忽略
            .exclude.add(resolve('src/icons'))
            // 結束
            .end();
        //config.module 表示創建一個具名規則 以後用來修改規則
        config.module
            //規則
            .rule('icons')
            // 正則,解析.svg格式文件
            .test(/\.svg$/)
            //解析的文件
            .include.add(resolve('src/icons'))
            // 結束
            .end()
            //新增一個解析的loader
            .use('svg-sprite-loader')
            //具體的loader
            .loader('svg-sprite-loader')
            //loader的配置
            .options({
                symbolId: 'icon-[name]'
            })
            // 結束
            .end();

        // 新增規則,處理element-plus 2 錯誤
        config.module
            .rule('element-plus-2')
            .test(/\.mjs$/)
            .type('javascript/auto')
            .include.add(/node_modules/)
            .end();
    }
};
