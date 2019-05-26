// * Core configurations and rules
module.exports = {
  parser  : 'babel-eslint',
  extends : [
    './core/best-practices',
    './core/dependencies',
    './core/errors',
    './core/eslint',
    './core/jsdoc',
    './core/json',
    './core/junk',
    './core/promise',
    './core/security',
    './core/style',
    './core/variables',
    './core/import-export',
  ].map( require.resolve ),
  parserOptions : {
    sourceType                  : 'module',
  },
};
