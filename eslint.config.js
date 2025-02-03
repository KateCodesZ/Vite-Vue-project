import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import vue from 'eslint-plugin-vue'
import globals from 'globals'
import vueEslintParser from 'vue-eslint-parser'

export default [
  js.configs.recommended,
  eslintConfigPrettier,
  {
    files: ['**/*.{js,vue}'],
    plugins: {
      vue
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
        defineOptions: 'readonly'
      },
      parser: vueEslintParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    rules: {
      ...vue.configs.recommended.rules,
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always',
            normal: 'never',
            component: 'never'
          }
        }
      ],
      'vue/component-name-in-template-casing': ['error', 'PascalCase']
    }
  }
]
