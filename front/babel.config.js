module.exports = {
  presets: [
    "module:metro-react-native-babel-preset",
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/plugin-syntax-jsx",
  ],
  plugins: [
    ["@babel/plugin-proposal-class-properties", {loose: true}],
    "@babel/plugin-syntax-jsx",
    "@babel/plugin-proposal-export-namespace-from",
    "react-native-reanimated/plugin",
    [
      "module-resolver",
      {
        alias: {
          "react-native$": "react-native-web",
        },
      },
    ],
  ],
};
