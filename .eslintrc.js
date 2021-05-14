module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    globals: {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    parser: 'babel-eslint',
    env: {
        es6: true,
        browser: true,
        node: true
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            generators: true,
            experimentalObjectRestSpread: true
        }
    },
    plugins: [
        'react'
    ],
    settings: {
        'import/ignore': [
            'node_modules'
        ],
        'import/resolver': {
            // 识别 webpack 配置的路径别名
            webpack: {
                config: 'webpack.config.js'
            }
        },
        react: {   // 告知浏览器版本
            vsersion: '999.999.999'
        }
    },
    rules: {}
};
