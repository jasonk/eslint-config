module.exports = {
  env     : { node : true, es6 : true },
  rules   : {
    // enforce return after a callback
    'callback-return'       : 'off',
    // require all requires be top-level
    'global-require'        : 'off',
    // enforces error handling in callbacks (node environment)
    'handle-callback-err'   : 'off',
    // disallow mixing regular variable and require declarations
    'no-mixed-requires'     : [ 'error', false ],
    // disallow use of new operator with the require function
    'no-new-require'        : 'warn',
    // disallow string concatenation with __dirname and __filename
    'no-path-concat'        : 'warn',
    // disallow process.exit()
    'no-process-exit'       : 'off',
    // restrict usage of specified node modules
    'no-restricted-modules' : 'off',
    // disallow use of synchronous methods (off by default)
    'no-sync'               : 'warn',
  },
};
