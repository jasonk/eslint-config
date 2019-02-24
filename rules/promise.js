module.exports = {
  plugins : [ 'promise' ],
  rules   : {
    // make sure catch() is applied whenever then() is
    'promise/catch-or-return'           : 'error',
    // ensure that a then() always returns a value or a new promise
    'promise/always-return'             : 'error',
    // force param names to be resolve/reject
    'promise/param-names'               : 'error',
    // ensure that Promise is included in each file, not using native
    'promise/no-native'                 : 'off',
    // make sure promises are rejected with an Error
    'prefer-promise-reject-errors'      : 'error',
    'promise/avoid-new'                 : 'off',
    'promise/no-callback-in-promise'    : 'off',
    'promise/no-nesting'                : 'off',
    'promise/no-promise-in-callback'    : 'off',
    'promise/no-return-wrap'            : 'off',
    'promise/prefer-await-to-callbacks' : 'off',
    'promise/prefer-await-to-then'      : 'off',
    'promise/no-new-statics'            : 'error',
    'promise/valid-params'              : 'error',
    'no-async-promise-executor'         : 'error',
    'require-atomic-updates'            : 'error',
    // Don't allow return statements in a finally block, since nothing
    // can consume what is returned.
    'promise/no-return-in-finally'      : 'error',
  },
};
