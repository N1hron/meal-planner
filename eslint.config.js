import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import pluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import stylisticTs from "@stylistic/eslint-plugin-ts";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,vue}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs[
    ("flat/essential", "flat/strongly-recommended", "flat/recommended")
  ],
  {
    files: ["**/*.vue"],
    languageOptions: { parserOptions: { parser: tseslint.parser } }
  },
  pluginPrettierRecommended,
  {
    plugins: {
      "@stylistic/ts": stylisticTs
    },
    rules: {
      "vue/padding-line-between-blocks": ["error", "always"],
      "vue/enforce-style-attribute": ["error", { allow: ["scoped"] }],
      "vue/component-tags-order": [
        "error",
        {
          order: ["script", "template", "style"]
        }
      ],
      "@stylistic/ts/padding-line-between-statements": [
        "error",
        // before return
        { blankLine: "always", prev: "*", next: "return" },
        // after variables
        { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
        // between variable declarations
        {
          blankLine: "any",
          prev: ["const", "let", "var"],
          next: ["const", "let", "var"]
        },
        // after curly brackets `{ }`
        {
          blankLine: "always",
          prev: "block-like",
          next: "*"
        },
        // after directives
        { blankLine: "always", prev: "directive", next: "*" },
        // between directives
        { blankLine: "any", prev: "directive", next: "directive" },
        // after `case`, `default`
        { blankLine: "always", prev: ["case", "default"], next: "*" },
        // after imports
        { blankLine: "always", prev: "import", next: "*" },
        // between imports
        { blankLine: "any", prev: "import", next: "import" },
        // after expressions
        { blankLine: "always", prev: "expression", next: "*" },
        // between expressions
        { blankLine: "any", prev: "expression", next: "expression" },
        // after interfaces and types
        { blankLine: "always", prev: "*", next: ["interface", "type"] }
      ]
    }
  }
];
