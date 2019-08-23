module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    "no-console": ["error", { allow: ["warn", "error"] }],
    "max-len": [1, 100, 2, { ignoreComments: true }],
    // 'semi': ["error", "never"],
    'no-extra-semi': "error"
  }
};
