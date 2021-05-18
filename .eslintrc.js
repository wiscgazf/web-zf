module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: ['alloy', 'alloy/react', 'alloy/typescript', 'eslint:recommended'],
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
        amd: true,
        browser: true,
        node: true,
        es6: true
    },
    globals: {
        // 您的全局变量（设置为 false 表示它不允许被重新赋值）
        JSX: true,
        React: true,
        NodeJS: true,
        Promise: true
    },
    rules: {
        // 自定义您的规则
        '@typescript-eslint/no-require-imports': 0,
        'react/jsx-filename-extension': [
            'error',
            {
                extensions: ['.js', '.jsx', '.tsx', '.ts']
            }
        ],
        indent: ['error', 4, { SwitchCase: 1 }],
        eqeqeq: [2, 'allow-null'],
        quotes: [2, 'single'],
        'comma-dangle': ['error'],
        'no-unused-vars': 'error',
        'no-undef': 'off',
        'react/no-unstable-nested-components': 'off',
        'object-curly-spacing': ['error', 'always'],
        'array-bracket-spacing': 'off',
        'spaced-comment': 'off',
        'no-console': 'off',
        'typescript.validate.enable': 'off'
    }
};
