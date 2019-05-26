module.exports = {
  rules : {
    // Things that shouldn't go into the repo
    'no-console'               : 'warn',
    'no-debugger'              : 'error',

    // no assignment in conditional expressions
    'no-cond-assign'           : [ 'error', 'always' ],
    // no constant expressions in conditions
    'no-constant-condition'    : 'warn',
    // no control characters in regular expressions
    'no-control-regex'         : 'warn',
    // no duplicate arguments in functions
    'no-dupe-args'             : 'error',
    // no duplicate keys when creating object literals
    'no-dupe-keys'             : 'error',
    // no duplicate case labels
    'no-duplicate-case'        : 'error',
    // no empty character classes in regular expressions
    'no-empty-character-class' : 'error',
    // no empty statements
    'no-empty'                 : 'error',
    // no assigning to the exception in a catch block
    'no-ex-assign'             : 'error',
    // no double-negation boolean casts in a boolean context
    'no-extra-boolean-cast'    : 'error',
    // no unnecessary parentheses
    // http://eslint.org/docs/rules/no-extra-parens
    'no-extra-parens'          : [ 'off', 'all', {
      'conditionalAssign'       : true,
      'nestedBinaryExpressions' : false,
    } ],
    // no unnecessary semicolons
    'no-extra-semi'                   : 'error',
    // no overwriting functions written as function declarations
    'no-func-assign'                  : 'error',
    // no function or variable declarations in nested blocks
    'no-inner-declarations'           : 'error',
    // no invalid regular expression strings in the RegExp constructor
    'no-invalid-regexp'               : 'error',
    // no irregular whitespace outside of strings and comments
    'no-irregular-whitespace'         : 'error',
    // no negation of the left operand of an in expression
    'no-negated-in-lhs'               : 'error',
    // do not use object properties of the global object (i.e.Math and
    // JSON) as functions
    'no-obj-calls'                    : 'error',
    // no multiple spaces in a regular expression literal
    'no-regex-spaces'                 : 'error',
    // no sparse arrays
    'no-sparse-arrays'                : 'error',
    // no unreachable statements after return/throw/continue/break
    'no-unreachable'                  : 'error',
    // no comparisons NaN (use isNan() instead)
    'use-isnan'                       : 'error',
    // ensure that the results of typeof are compared against a valid string
    'valid-typeof'                    : 'error',
    // Avoid code that looks like two expressions but is actually one
    'no-unexpected-multiline'         : 'error',
    // avoid unsafe negation
    'no-unsafe-negation'              : 'error',
    // don't allow comparisons to -0, since they don't work like you
    // expect ( 0 == -0 is TRUE)
    'no-compare-neg-zero'             : 'error',
  },
};
