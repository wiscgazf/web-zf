const path = require('path');
const {
    override, // 主函数
    fixBabelImports, // 配置按需加载
    addWebpackAlias, // 配置别名
    addLessLoader // lessLoader 配置，可更改主题色等
} = require('customize-cra');

const rewiredMap = () => config => {
    // config为所有的webpack配置
    // config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false;
    return config;
};

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es', // library 目录
        style: true // 自动打包相关的样式
    }),
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: {
                '@primary-color': '#1890ff'
            }
        }
    }),
    addWebpackAlias({
        '@': path.resolve(__dirname, './src')
    }),
    rewiredMap()
);
