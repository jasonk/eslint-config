// * For projects transpiled with babel
const core = Object.assign( {},
  require( './core/style' ).rules,
  require( './core/errors' ).rules,
  require( './core/best-practices' ).rules,
);

module.exports = {
  plugins   : [ 'babel' ],
  extends   : [ './index' ].map( require.resolve ),
  settings  : {
    'import/resolver' : 'universal-resolver/eslint',
  },
  rules     : {
    // babel inserts `'use strict';` for us
    'strict'                        : [ 'error', 'never' ],
  },
};

const rules = module.exports.rules;
[
  'new-cap', 'object-curly-spacing', 'quotes', 'semi',
  'no-unused-expressions', 'valid-typeof',
].forEach( x => {
  rules[ x ] = 'off';
  rules[ `babel/${x}` ] = core[ x ];
} );
