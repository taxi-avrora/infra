module.exports = {
    parserOptions: {
        ecmaVersion: 8
    },

    plugins: [
        'bem-xjst'
    ],

    env: {
        browser: true,
        node: true,
        es6: true,
        'bem-xjst/bemhtml': true,
        'bem-xjst/bemtree': true
    },

    globals: {
        // YModules
        modules: false
    },

    rules: {
        curly: ['error', 'multi-line']
    },

    extends: 'pedant'
};
