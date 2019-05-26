// * For test suites
module.exports = {
  extends : [
    './mocha',
    './chai',
  ].map( require.resolve ),
  globals : {
    TEST  : true,
  },
  rules   : {
    // This is off because it doesn't work in the test suite, it
    // thinks all your test requirements should be dependencies
    // instead of devDependencies, because it doesn't understand that
    // the test directory is a development only directory.
    'import/no-extraneous-dependencies'   : 'off',
    // Don't require jsdoc for test files
    'require-jsdoc'                       : 'off',
    'jsdoc/require-param'                 : 'off',
    'valid-jsdoc'                         : 'off',
    'jsdoc/no-undefined-types'            : 'off',
    // There shouldn't be an issue with having logging statements in
    // the test suite..
    'no-console'                          : 'off',
    // Tests commonly don't return anything from their last .then(),
    // it just contains assertions..
    'promise/always-return'               : 'off',
    // describe() blocks are very commonly larger than 100 lines
    'max-lines-per-function'              : [ 'warn', 2000 ],
    // These are just not helpful for tests
    'new-cap'                             : 'off',
    'babel/new-cap'                       : 'off',
  },
};
