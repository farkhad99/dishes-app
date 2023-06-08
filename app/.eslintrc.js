module.exports = {
  env: {
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended'],
  rules: {
    'vue/no-unused-vars': 'error',
    'vue/require-default-prop': 'off',
  },
}
