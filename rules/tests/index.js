module.exports = {
  env       : { mocha : true },
  extends   : [
    './overrides.js',
    './mocha.js',
    './chai-expect.js',
    './should-promised.js',
  ].map( require.resolve ),
  rules     : {
    'func-names'            : 'off',
    'prefer-arrow-callback' : 'off',
  },
  globals   : {
    _         : true,
    chai      : true,
    sinon     : true,
    should    : true,
    expect    : true,
    assert    : true,
    TEST      : true,
  },
};
