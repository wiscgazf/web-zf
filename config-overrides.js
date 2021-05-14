const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

const {
    override, // 主函数
    fixBabelImports, // 配置按需加载
    addWebpackAlias, // 配置别名
    addLessLoader // lessLoader 配置，可更改主题色等
} = require('customize-cra');

const rewiredMap = () => config => {
    // config为所有的webpack配置
    // config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false;

    // 去除注释、多进程打包压缩
    config.plugins = [...config.plugins,
        new UglifyJsPlugin({
            uglifyOptions: {
                warnings: false,
                compress: {
                    drop_debugger: true,
                    drop_console: true
                }
            }
        }),
        new HardSourceWebpackPlugin()
    ];
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
        '@': path.resolve(__dirname, 'src')
    }),
    rewiredMap()
);
