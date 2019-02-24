module.exports = {
  parser  : 'babel-eslint',
  extends : [
    './rules/best-practices',
    './rules/dependencies',
    './rules/errors',
    './rules/jsdoc',
    './rules/json',
    './rules/junk',
    './rules/node',
    './rules/promise',
    './rules/security',
    './rules/style',
    './rules/variables',
  ].map( require.resolve ),
  parserOptions : {
    ecmaVersion                 : 5,
    sourceType                  : 'module',
    allowImportExportEverywhere : false,
    ecmaFeatures                : {
      experimentalObjectRestSpread  : true,
      legacyDecorators              : false,
    },
  },
  globals       : {
    // log     : true,
  },
  settings : {
    'import/resolver' : { node : { extensions : [ '.js', '.json' ] } },
  },
};
