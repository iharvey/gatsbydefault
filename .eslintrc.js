module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  parser: "babel-eslint",
  rules: {
    strict: 0,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
}
