module.exports = {
  env: {
    es6: true,
    browser: true,
    amd: true,
    node: true,
  },
  parser: "babel-eslint",
  rules: {
    strict: 0,
    // "max-lines": ["warn", 200],
    // "max-lines-per-function": ["warn", 20],
    "complexity": ["warn", 5],
    "max-nested-callbacks": ["warn", 2],
    "max-depth": ["warn", 3],
    "max-params": ["warn", 2],
      "no-param-reassign": "warn",
    "fp/no-mutating-assign": "warn",
    "fp/no-mutating-methods": "warn",
    // "fp/no-mutation": "warn",
    "fp/no-let": "warn",
    "fp/no-loops": "warn",
    "fp/no-delete": "warn",
    "fp/no-throw": "warn",
    'prettier/prettier': [ // customizing prettier rules (unfortunately not many of them are customizable)
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        "printWidth": 120,
        "endOfLine": "lf",
        "semi": false,
        "singleQuote": false,
        "tabWidth": 2,
        "trailingComma": "es5"
      },
    ],
  },
  plugins: ['fp', 'prettier'],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  "settings": {
    "react": {
      "pragma": "React",  // Pragma to use, default to "React"
      "version": "detect", // React version. "detect" automatically picks the version you have installed.
      "flowVersion": "0.53" // Flow version
    },
    // "propWrapperFunctions": [
    //     "forbidExtraProps",
    //     {"property": "freeze", "object": "Object"},
    //     {"property": "myFavoriteWrapper"}
    // ],
    // "linkComponents": [
    //   // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
    //   "Hyperlink",
    //   {"name": "Link", "linkAttribute": "to"}
    // ]
  }
}
