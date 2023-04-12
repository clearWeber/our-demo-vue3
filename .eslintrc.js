module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    '@vue/standard',
    'plugin:prettier/recommended'
  ],
  overrides: [],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-var': 'error',
    'vue/multi-word-component-names': 'off',
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    //强制不使用分号结尾
    semi: ['error', 'never'],
    //强制使用单引号
    quotes: ['error', 'single'],
    indent: ['error', 4],
    'space-before-function-paren': 0,
    'eol-last': 0,
    'no-useless-escape': 'off',
    'max-len': [
      2,
      200,
      4,
      {
        ignoreUrls: true
      }
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: false
      }
    ],
    'guard-for-in': 'error',
    'vue/multi-word-component-names': 0 // 取消组件名称校验
  }
}
