// * For test suites using Cypress
module.exports = {
  plugins : [ 'cypress' ],
  env     : { 'cypress/globals' : true },
  extends : [ 'plugin:cypress/recommended' ].concat( [
    './mocha', './chai',
  ].map( require.resolve ) ),
  rules   : {
    // Cypress .then is not really a promise
    'promise/catch-or-return'            : 'off',
    'promise/always-return'              : 'off',
    // Cypress doesn't actually have any production dependencies
    'import/no-extraneous-dependencies'  : 'off',
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
