module.exports = {
  plugins : [ 'dependencies' ],
  rules   : {
    'dependencies/case-sensitive'   : 'error',
    'dependencies/no-cycles'        : 'off',
    'dependencies/no-unresolved'    : 'off',
    'dependencies/require-json-ext' : 'error',
  },
};
