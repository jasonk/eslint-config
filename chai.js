// * For test suites using Chai
module.exports = {
  plugins : [ 'chai-expect', 'should-promised', 'chai-friendly' ],
  rules   : {
    // no comparisons inside the `expect()` argument
    'chai-expect/no-inner-compare'        : 'error',
    // Don't calling expect(...) without an assertion
    'chai-expect/missing-assertion'       : 'error',
    // Prevent calling assertion properties as functions
    'chai-expect/terminating-properties'  : 'error',
    // Make sure that should assertions return the promise (otherwise
    // the test doesn't work)
    'should-promised/return-promise'      : 'error',
    // Relaced no-unused-expressions with the chai-friendly version
    'no-unused-expressions'               : 'off',
    'babel/no-unused-expressions'         : 'off',
    'chai-friendly/no-unused-expressions' : 'error',
  },
};
