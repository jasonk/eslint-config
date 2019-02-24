module.exports = {
  parser  : 'babel-eslint',
  extends : [
    './es5.js',
    './rules/es6',
    './rules/import-export',
  ].map( require.resolve ),
  parserOptions : {
    ecmaVersion                 : 6,
    sourceType                  : 'module',
    allowImportExportEverywhere : false,
    ecmaFeatures                : {
      experimentalObjectRestSpread  : true,
      legacyDecorators              : true,
    },
  },
  globals       : {
  },
  settings : {
    'import/resolver' : { node : { extensions : [ '.js', '.json' ] } },
  },
};
