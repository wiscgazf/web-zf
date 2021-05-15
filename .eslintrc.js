module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: ['alloy', 'alloy/react', 'alloy/typescript'],
    settings: {
        settings: {
            react: {
                version: 'detect'
            },
            'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
            'import/parsers': {
                '@typescript-eslint/parser': ['.ts', '.tsx']
            },
            'import/resolver': {
                node: {
                    extensions: ['.js', '.jsx', '.ts', '.tsx'],
                    moduleDirectory: ['node_modules', 'src']
                }
            }
        }
    },
    env: {
        // 您的环境变量（包含多个预定义的全局变量）
        browser: true,
        node: true,
        es6: true
    },
    globals: {
        // 您的全局变量（设置为 false 表示它不允许被重新赋值）
        myGlobal: false
    },
    rules: {
        // 自定义您的规则
        '@typescript-eslint/no-require-imports': 0,
        indent: ['error', 4],
        eqeqeq: [2, 'allow-null'],
        quotes: [2, 'single'],
        'comma-dangle': ['error'],
        'no-unused-vars': 'error',
        'react/no-unstable-nested-components': 'off',
        'object-curly-spacing': ['error', 'always'],
        'spaced-comment': 'off',
        'no-console': 'off'
    }
};
