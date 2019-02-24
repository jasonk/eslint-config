module.exports = {
  plugins : [ 'chai-expect' ],
  rules   : {
    // no comparisons inside the `expect()` argument
    'chai-expect/no-inner-compare'        : 'error',
    // Don't calling expect(...) without an assertion
    'chai-expect/missing-assertion'       : 'error',
    // Prevent calling assertion properties as functions
    'chai-expect/terminating-properties'  : 'error',
  },
};
