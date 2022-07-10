module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: 'vue-eslint-parser',  // https://github.com/vuejs/eslint-plugin-vue/issues/811
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": "warn",
    "no-debugger": "warn",
    'indent': ['warn', 2, { 'SwitchCase': 1 }],
    'no-else-return': ['warn'],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    "semi": [
      "error",
      "always"
    ],
    'curly': ['error'],
    'prettier/prettier': ['off', { singleQuote: true }],
  },
  overrides: [
    {
      "files": [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ]
    }
  ]
};
