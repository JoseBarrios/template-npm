module.exports = {
  env: {
    browser: true,
    es6: true, // Enable ES6 syntax
    node: true, // Enable Node.js global variables
  },
  parserOptions: {
    ecmaVersion: 2015, // Specifies ECMAScript version, 2015 enables ES6
    sourceType: 'module', // Allows usage of `import` and `export`
  },
  extends: 'eslint:recommended',
};
