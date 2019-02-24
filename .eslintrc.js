module.exports = {
  extends : [ require.resolve( './index' ) ],
  rules   : {
    'import/unambiguous'          : 'off',
    'array-element-newline'       : 'off',
    'quote-props'                 : 'off',
    'import/no-commonjs'          : 'off',
  },
};
