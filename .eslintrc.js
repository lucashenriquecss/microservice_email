module.exports = {
    env: {
        commonjs: true,
        es2021: true,
        node: true,
    },
    extends: 'airbnb-base',
    overrides: [
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['off'],
        'no-unused-vars': 'warn',
        'prefer-const': 'warn',
        'spaced-comment': 'warn',
        camelcase: 'warn',
    },
};
