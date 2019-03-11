module.exports = {
    parser: "babel-eslint",
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true
    },
    extends: "eslint:recommended",
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true
        },
        ecmaVersion: 7,
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        indent: ["warn", 4, { SwitchCase: 1 }],
        "linebreak-style": ["warn", "unix"],
        quotes: ["warn", "single"],
        semi: ["warn", "always"],
        "no-unused-vars": "off",
        "no-console": "off",
        "no-cond-assign": ["error", "always"],
        "no-var": "warn",
        "getter-return": "off"
    }
};
