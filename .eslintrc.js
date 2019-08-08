module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  plugins: ["@typescript-eslint", "react", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    // "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    "react/prop-types": "off", // Disable prop-types as we use TypeScript for type checking
    "@typescript-eslint/explicit-function-return-type": "off",
    "react/display-name": "off",
    // "@typescript-eslint/no-use-before-define": ["warn", { "variables": false }]
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
}

// module.exports = {
//   env: {
//     es6: true,
//     browser: true,
//     amd: true,
//     node: true,
//   },
//   parser: "babel-eslint",
//   parserOptions: {
//     ecmaVersion: 6,
//     sourceType: "module",
//     ecmaFeatures: {
//       jsx: true,
//     },
//   },
//   plugins: ["prettier", "react", "fp"],
//   extends: [
//     "eslint:recommended",
//     "plugin:react/recommended",
//     "standard",
//     "standard-react",
//     "plugin:prettier/recommended",
//   ],
//   rules: {
//     strict: 0,
//     complexity: ["warn", 5],
//     "max-nested-callbacks": ["warn", 2],
//     "max-depth": ["warn", 3],
//     "max-params": ["warn", 2],
//     "no-param-reassign": "warn",
//     "fp/no-mutating-assign": "warn",
//     "fp/no-mutating-methods": "warn",
//     "fp/no-let": "warn",
//     "fp/no-loops": "warn",
//     "fp/no-delete": "warn",
//     "fp/no-throw": "warn",
//     "react/no-unused-prop-types": ["warn", { "customValidators": [], "skipShapeProps": false }],
//     "react/no-unused-prop-types": 1,
//     "react/jsx-filename-extension": [1, { extensions: [".jsx"] }],
//     // "react/jsx-quotes":
//     "prettier/prettier": [
//       // customizing prettier rules (unfortunately not many of them are customizable)
//       "error",
//       {
//         singleQuote: true,
//         trailingComma: "all",
//         printWidth: 120,
//         endOfLine: "lf",
//         semi: false,
//         singleQuote: false,
//         tabWidth: 2,
//         trailingComma: "es5",
//       },
//     ],
//   },
//   settings: {
//     react: {
//       createClass: "createReactClass", // Regex for Component Factory to use,
//       pragma: "React", // Pragma to use, default to "React"
//       version: "detect", // React version. "detect" automatically picks the version you have installed.
//       flowVersion: "0.53", // Flow version
//     },
//   },
// }
