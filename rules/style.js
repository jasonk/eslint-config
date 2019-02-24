module.exports = {
  rules  : {
    // enforce spacing inside array brackets
    'array-bracket-spacing'     : [ 'warn', 'always' ],
    // enforce spacing inside single-line blocks
    'block-spacing'             : [ 'warn', 'always' ],
    // enforce one true brace style
    'brace-style'               : [ 'warn', '1tbs', {
      'allowSingleLine' : true,
    } ],
    // require camel case names
    'camelcase'                 : 'warn',
    // enforce spacing before and after comma
    'comma-spacing'             : [ 'error', {
      'before' : false,
      'after'  : true,
    } ],
    // enforce one true comma style
    'comma-style'               : [ 'error', 'last' ],
    // spaces around computed properties (like `foo[ 'bar' ]`).
    // Turned off because it also requires them around array indexes
    // (like `foo[ 2 ]`) which gets a bit aggravating..
    'computed-property-spacing' : 'off',
    // enforces consistent naming when capturing the current execution
    // context
    'consistent-this'           : 'off',
    // enforce newline at the end of file, with no multiple empty lines
    'eol-last'                  : 'error',
    // require function expressions to have a name
    'func-names'                : 'warn',
    // enforces use of function declarations or expressions
    'func-style'                : 'off',
    // this option enforces minimum and maximum identifier lengths
    // (variable names, property names etc.)
    'id-length'                 : 'off',
    // this option sets a specific tab width for your code
    'indent'                    : [ 'warn', 2, {
      SwitchCase          : 1,
      VariableDeclarator  : 1,
      MemberExpression    : 1,
      FunctionDeclaration : { body : 1, parameters : 1 },
      FunctionExpression  : { body : 1, parameters : 1 },
      CallExpression      : { arguments : 1 },
      ArrayExpression     : 1,
      ObjectExpression    : 1,
    } ],
    // specify whether double or single quotes should be used in JSX attrs
    'jsx-quotes'                : 'off',
    // enforces spacing between keys and values in object literal properties
    'key-spacing'               : [ 'error', {
      beforeColon : true,
      afterColon  : true,
      align       : 'colon',
      mode        : 'minimum',
    } ],
    // require a space before & after certain keywords
    'keyword-spacing' : [ 'error', {
      before    : true,
      after     : true,
      overrides : {
        return  : { after : true },
        throw   : { after : true },
        catch   : { after : false }, // because `catch( err ) {`
        case    : { after : true },
      },
    } ],
    // enforces empty lines around comments
    'lines-around-comment' : 'off',
    // disallow mixed 'LF' and 'CRLF' as linebreaks
    'linebreak-style'      : 'error',
    // specify the maximum length of a line in your program
    // http://eslint.org/docs/rules/max-len
    'max-len'              : [ 'warn', 80, 2, {
      ignoreUrls            : true,
      ignoreComments        : true,
      ignoreRegExpLiterals  : true,
    } ],
    // specify the maximum depth callbacks can be nested
    'max-nested-callbacks'    : 'off',
    // restrict the number of statements per line
    // http://eslint.org/docs/rules/max-statements-per-line
    'max-statements-per-line' : [ 'off', { 'max' : 1 } ],
    // require a capital letter for constructors
    'new-cap'                 : [ 'error', {
      capIsNewExceptions  : [
        'Object',
        // For cucumber testing scenarios..
        // 'Where', 'Given', 'When', 'Then',
      ],
      newIsCap  : true,
    } ],
    // disallow the omission of parentheses when invoking
    // a constructor with no arguments
    'new-parens'                    : 'error',
    // allow/disallow an empty newline after var statement
    'newline-after-var'             : 'off',
    // http://eslint.org/docs/rules/newline-before-return
    'newline-before-return'         : 'off',
    // enforces new line after each method call in the chain to make it
    // more readable and easy to maintain
    'newline-per-chained-call'      : [ 'error', { ignoreChainWithDepth : 3 } ],
    // disallow use of the Array constructor
    'no-array-constructor'          : 'error',
    // disallow use of the continue statement
    'no-continue'                   : 'off',
    // disallow comments inline after code
    'no-inline-comments'            : 'off',
    // disallow if as the only statement in an else block
    'no-lonely-if'                  : 'error',
    // disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs'      : 'error',
    // disallow multiple empty lines and only one newline at the end
    'no-multiple-empty-lines'       : [ 'error', { max : 2, maxEOF : 1 } ],
    // disallow negated conditions
    // http://eslint.org/docs/rules/no-negated-condition
    'no-negated-condition'          : 'off',
    // disallow nested ternary expressions
    'no-nested-ternary'             : 'warn',
    // disallow use of the Object constructor
    'no-new-object'                 : 'error',
    // disallow space between function identifier and application
    'no-spaced-func'                : 'error',
    // disallow the use of ternary operators
    'no-ternary'                    : 'off',
    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces'            : 'warn',
    // disallow dangling underscores in identifiers
    'no-underscore-dangle'          : [ 'error', {
      allow                 : [],
      allowAfterThis        : true,
      allowAfterSuper       : true,
      enforceInMethodNames  : false,
    } ],
    // disallow the use of Boolean literals in conditional expressions
    // also, prefer `a || b` over `a ? a : b`
    // http://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary'           : [ 'error', {
      'defaultAssignment' : false,
    } ],
    // disallow whitespace before properties
    // http://eslint.org/docs/rules/no-whitespace-before-property
    'no-whitespace-before-property' : 'error',
    // require padding inside curly braces
    'object-curly-spacing'          : [ 'error', 'always' ],
    // allow just one var statement per function
    'one-var'                       : 'off',
    // require a newline around variable declaration
    'one-var-declaration-per-line'  : 'off',
    // require assignment operator shorthand where possible or
    // prohibit it entirely
    'operator-assignment'           : 'off',
    // enforce operators to be placed before or after line breaks
    'operator-linebreak'            : 'off',
    // enforce padding within blocks
    'padded-blocks'                 : 'off',
    // require quotes around object literal property names
    // http://eslint.org/docs/rules/quote-props.html
    'quote-props'                   : [ 'error', 'consistent-as-needed', {
      keywords    : false,
      unnecessary : true,
      numbers     : false,
    } ],
    // specify whether double or single quotes should be used
    'quotes'                      : [ 'error', 'single', {
      avoidEscape             : true,
      allowTemplateLiterals   : true,
    } ],
    // require identifiers to match the provided regular expression
    'id-match'                    : 'off',

    // enforce spacing before and after semicolons
    /*
    // I wish there were a way to require semis at the end of the line
    // to not be preceded by a space, but also allow (or require),
    // this:
    //  for ( let x = 1 ; x < foo.length ; x++ )
    'semi-spacing'                : [ 'warn', {
      'before'  : true,
      'after'   : true,
    } ],
    */
    'semi-spacing'                : 'off',
    // require or disallow use of semicolons instead of ASI
    'semi'                        : [ 'error', 'always' ],
    // sort variables within the same declaration block
    'sort-vars'                   : 'off',
    // require or disallow space before blocks
    'space-before-blocks'         : 'error',
    // require or disallow space before function opening parenthesis
    // http://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren' : [ 'error', {
      anonymous : 'never',
      named     : 'never',
    } ],
    // require or disallow spaces inside parentheses
    'space-in-parens' : [ 'error', 'always' ],
    // require spaces around operators
    'space-infix-ops' : 'warn',
    // Require or disallow spaces before/after unary operators
    'space-unary-ops' : [ 'warn', { words : true, nonwords : false } ],
    // require or disallow a space immediately following the // or /*
    // in a comment
    'spaced-comment'  : [ 'error', 'always', { exceptions : [ '-', '+' ] } ],
    // require regex literals to be wrapped in parentheses
    'wrap-regex'                       : 'off',
    // don't allow files to have a BOM
    'unicode-bom'                      : [ 'error', 'never' ],
    // don't allow space between function name and it's parens
    'func-call-spacing'                : [ 'error', 'never' ],
    // don't allow tabs
    'no-tabs'                          : 'error',
    // warn when using template curlies inside a regular string
    'no-template-curly-in-string'      : 'warn',
    // don't use parseInt when you could be using literals
    'prefer-numeric-literals'          : 'error',
    // make sure async functions have an await expression
    'require-await'                    : 'off',
    // don't allow space between rest/spread operators and their args
    'rest-spread-spacing'              : [ 'error', 'never' ],
    // require Symbols to have descriptions
    'symbol-description'               : 'error',
    // require non-block statements to be single-line
    'nonblock-statement-body-position' : [ 'error', 'beside' ],
    'implicit-arrow-linebreak'         : [ 'error', 'beside' ],
    'lines-between-class-members'      : [ 'error', 'always', {
      exceptAfterSingleLine : true,
    } ],
    // 'multiline-comment-style'          : [ 'error', 'starred-block' ],
    'multiline-comment-style'          : 'off',
    'semi-style'                       : [ 'error', 'last' ],

    'switch-colon-spacing'             : [ 'error', {
      after  : true,
      before : true,
    } ],
  },
};
