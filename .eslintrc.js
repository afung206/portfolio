module.exports = {
    root: true,
    extends: ['react-app'],
    plugins: ['chai-friendly'],
    rules: {
        'no-var': 'error',
        '@typescript-eslint/no-unused-expression': 'off',
        'chai-friendly/no-unused-expressions': 'error',
    },
    overrides: [
        {
            files: ['**/*.ts?(x)'],
            plugins: ['chai-friendly'],
            extends: ['react-app', 'plugin:@typescript-eslint/recommended-requiring-type-checking'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                project: './tsconfig.json',
            },
            rules: {
                '@typescript-eslint/no-unused-expressions': 'off',
                'chai-friendly/no-unused-expressions': 'error',
                '@typescript-eslint/unbound-method': 'off',
            },
        },
    ],
};
