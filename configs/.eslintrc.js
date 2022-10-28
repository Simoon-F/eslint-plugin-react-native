module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react", "react-native", "simple-import-sort", "unicorn", "import"],
  env: {
    es2022: true,
    browser: true,
    "react-native/react-native": true,
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    camelcase: "error",
    "spaced-comment": "error",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "no-duplicate-imports": "error",
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "unicorn/filename-case": [
      "error",
      {
        cases: {
          kebabCase: true,
          camelCase: false,
          snakeCase: false,
          pascalCase: false,
        },
      },
    ],
    "react-hooks/exhaustive-deps": [
      "error",
      {
        additionalHooks:
          "(useMyCustomHook|useMyOtherCustomHook|useRecoilCallback)",
      },
    ],
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" }, // return 语句之前要有空行
      {
        blankLine: "always",
        prev: ["function", "const", "var", "let"], // 指定语法糖语句之间要有空行
        next: "*",
      },
    ],
  },
  // 共享设置，会提供给每一个将被执行的规则
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
    react: {
      // ‘detect’ 会自动选择你所安装的 React 版本
      version: "detect",
    },
  },
};
