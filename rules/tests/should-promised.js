module.exports = {
  plugins : [ 'should-promised' ],
  rules   : {
    // Make sure that should assertions return the promise (otherwise
    // the test doesn't work)
    'should-promised/return-promise'      : 'error',
  },
};
