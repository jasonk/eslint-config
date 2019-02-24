const style = require( './style.js' );

module.exports = {
  plugins   : [ 'babel' ],
  globals   : {},
  rules     : {
    'babel/new-cap'                 : style.rules[ 'new-cap' ],
    'new-cap'                       : 'off',
    'babel/no-invalid-this'         : 'off',
    'babel/object-curly-spacing'    : style.rules[ 'object-curly-spacing' ],
    'object-curly-spacing'          : 'off',
    'babel/quotes'                  : style.rules.quotes,
    'quotes'                        : 'off',
    'babel/semi'                    : style.rules.semi,
    'semi'                          : 'off',
    'babel/no-unused-expressions'   : 'warn',
    'no-unused-expressions'         : 'off',
    'babel/valid-typeof'            : 'error',
    'valid-typeof'                  : 'off',
    // babel inserts `'use strict';` for us
    'strict'                        : [ 'error', 'never' ],
  },
};
