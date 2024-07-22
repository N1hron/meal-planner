export default {
  trailingComma: "es5",
  tabWidth: 4,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: true,
  arrowParens: "always",
  endOfLine: "auto",
  printWidth: 90,
  bracketSpacing: true,
  overrides: [
    {
      files: ["*.config.js", "*.json", "*.cjs"],
      options: {
        trailingComma: "none",
        singleQuote: false,
        tabWidth: 2,
        quoteProps: "preserve"
      }
    }
  ]
};
