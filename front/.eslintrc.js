module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "@react-native-community",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "react-hooks", "@typescript-eslint", "prettier"],
  rules: {
    "react/prop-types": 1,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/no-unused-vars": "error",
    "react/display-name": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "warn",
  },
};
