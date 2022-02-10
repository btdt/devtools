module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['plugin:vue/vue3-essential'],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: false,
      jsx: true,
    },
  },
  parser: 'vue-eslint-parser',
  rules: {
    'no-console': 'off',
    'no-tabs': 'error',
    'no-multi-spaces': 'error',
    'no-trailing-spaces': 'error',
    'eol-last': 'error',
    'semi': 'error',
    'arrow-spacing': 'error',
    'arrow-parens': 'error',
    'comma-style': ['error', 'last'],
    'comma-dangle': ['error', 'always-multiline'],
    'generator-star-spacing': ['error', 'both'],
    'array-element-newline': ['error', 'consistent'],
    'quote-props': ['error', 'consistent'],
    'quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'indent': [
      'error',
      2,
      {
        SwitchCase: 1,
        ignoredNodes: ['TemplateLiteral > *', 'ConditionalExpression > *'],
      },
    ],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none',
        ignoreRestSiblings: true,
      },
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1,
        maxBOF: 0,
      },
    ],
    'space-before-function-paren': [
      'error',
      {
        named: 'never',
        anonymous: 'always',
        asyncArrow: 'always',
      },
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 0,
      },
    ],
    'vue/html-indent': 'error',
    'vue/script-setup-uses-vars': 'error',
    'vue/component-name-in-template-casing': ['error'],
    'vue/multi-word-component-names': 'off',
  },
};
