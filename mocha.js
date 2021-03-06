// * For test suites using Mocha
module.exports = {
  plugins : [ 'mocha' ],
  env     : { mocha : true },
  extends : [].map( require.resolve ),
  globals : {
  },
  rules   : {
    'mocha/no-exclusive-tests'           : 'error',
    'mocha/no-skipped-tests'             : 'warn',
    'mocha/no-pending-tests'             : 'warn',
    'mocha/handle-done-callback'         : 'off',
    'mocha/no-synchronous-tests'         : 'off',
    'mocha/no-global-tests'              : 'off',
    'mocha/no-return-and-callback'       : 'error',
    'mocha/valid-test-description'       : 'off',
    'mocha/valid-suite-description'      : 'off',
    'mocha/no-sibling-hooks'             : 'off',
    'mocha/no-mocha-arrows'              : 'off',
    'mocha/no-hooks'                     : 'off',
    'mocha/no-hooks-for-single-case'     : 'off',
    'mocha/no-top-level-hooks'           : 'off',
    'mocha/no-identical-title'           : 'off',
    'mocha/max-top-level-suites'         : 'off',
    'mocha/no-nested-tests'              : 'error',
    'func-names'                         : 'off',
    'prefer-arrow-callback'              : 'off',
  },
};
