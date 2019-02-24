module.exports = {
  rules : {
    // enforce or disallow variable initializations at definition
    'init-declarations'          : 'off',
    // disallow the catch clause parameter name being the same as
    // a variable in the outer scope
    'no-catch-shadow'            : 'error',
    // disallow deletion of variables
    'no-delete-var'              : 'error',
    // disallow var and named functions in global scope
    // http://eslint.org/docs/rules/no-implicit-globals
    'no-implicit-globals'        : 'warn',
    // disallow labels that share a name with a variable
    'no-label-var'               : 'error',
    // disallow self assignment
    'no-self-assign'             : 'error',
    // disallow shadowing of names such as arguments
    'no-shadow-restricted-names' : 'error',
    // disallow declaration of variables already declared in the outer scope
    'no-shadow'                  : 'error',
    // disallow use of undefined when initializing variables
    'no-undef-init'              : 'error',
    // disallow use of undeclared variables unless mentioned in
    // a /*global */ block
    'no-undef'                   : 'error',
    // disallow use of undefined variable
    'no-undefined'               : 'off',
    // disallow declaration of variables that are not used in the code
    'no-unused-vars'             : [ 'error', {
      vars                : 'all',
      args                : 'none',
      varsIgnorePattern   : '^(_|debug)$',
      ignoreRestSiblings  : true,
    } ],
    // disallow use of variables before they are defined
    'no-use-before-define'            : [ 'error', 'nofunc' ],
    'array-bracket-newline'           : [ 'error', 'consistent' ],
    'array-element-newline'           : [ 'error', 'consistent' ],
    'function-paren-newline'          : [ 'error', 'consistent' ],
    'no-misleading-character-class'   : 'error',
    'padding-line-between-statements' : 'off',
  },
};
