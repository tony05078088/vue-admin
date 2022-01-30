const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
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
    }
};
