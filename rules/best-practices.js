module.exports = {
  rules : {
    // enforces getter/setter pairs in objects
    'accessor-pairs'        : 'off',
    // enforces return statements in callbacks of array's methods
    // http://eslint.org/docs/rules/array-callback-return
    'array-callback-return' : 'error',
    // treat var statements as if they were block scoped
    'block-scoped-var'      : 'error',
    // require return statements to either always or never specify values
    'consistent-return'     : 'off',
    // specify curly brace conventions for all control statements
    'curly'                 : [ 'error', 'multi-line', 'consistent' ],
    // require default case in switch statements
    'default-case'          : [ 'error', {
      'commentPattern' : '^no default$',
    } ],
    // encourages use of dot notation whenever possible
    'dot-notation'          : [ 'error', { allowKeywords : true } ],
    // enforces consistent newlines before or after dots
    'dot-location'          : [ 'error', 'property' ],
    // require the use of === and !==
    // http://eslint.org/docs/rules/eqeqeq
    'eqeqeq'                : [ 'error', 'allow-null' ],
    // make sure for-in loops have an if statement
    'guard-for-in'          : 'error',
    // Warn about the use of prototype built-ins (such as
    // foo.hasOwnProperty()), because it's common to create objects
    // that will be used as maps with `Object.create(null);`, which
    // means they don't inherit those properties..
    'no-prototype-builtins' : 'warn',
    // Blacklist certain identifiers to prevent them being used
    // http://eslint.org/docs/rules/id-blacklist
    'id-blacklist'          : 'off',
    // disallow the use of alert, confirm, and prompt
    'no-alert'              : 'error',
    // disallow use of arguments.caller or arguments.callee
    'no-caller'             : 'error',
    // disallow lexical declarations in case/default clauses
    'no-case-declarations'  : 'error',
    // disallow regexes that look like division (basically regexes
    // that start with `/=`..
    'no-div-regex'          : 'off',
    // disallow else after a return in an if
    'no-else-return'        : 'off',
    // disallow empty functions, except for standalone funcs/arrows
    // http://eslint.org/docs/rules/no-empty-function
    'no-empty-function'     : [ 'error', {
      'allow' : [
        'arrowFunctions',
        'functions',
        'methods',
      ],
    } ],
    // disallow empty destructuring patterns
    // http://eslint.org/docs/rules/no-empty-pattern
    'no-empty-pattern'     : 'error',
    // disallow Unnecessary Labels
    // http://eslint.org/docs/rules/no-extra-label
    'no-extra-label'       : 'error',
    // disallow comparisons to null without a type-checking operator
    'no-eq-null'           : 'error',
    // disallow use of eval()
    'no-eval'              : 'error',
    // disallow adding to native types
    'no-extend-native'     : 'error',
    // disallow unnecessary function binding
    'no-extra-bind'        : 'error',
    // disallow fallthrough of case statements
    'no-fallthrough'       : 'warn',
    // disallow the use of leading or trailing decimal points in
    // numeric literals
    'no-floating-decimal'  : 'error',
    // disallow type conversions with shorter notations
    'no-implicit-coercion' : 'off',
    // disallow use of eval()-like methods
    'no-implied-eval'      : 'error',
    // disallow this keywords outside of classes or class-like objects
    'no-invalid-this'      : 'off',
    // disallow usage of __iterator__ property
    'no-iterator'          : 'error',
    // disallow use of labels for anything other then loops and
    // switches
    'no-labels'            : [ 'error', {
      allowLoop   : false,
      allowSwitch : false,
    } ],
    // disallow unnecessary nested blocks
    'no-lone-blocks'       : 'error',
    // disallow creation of functions within loops
    'no-loop-func'         : 'error',
    // disallow magic numbers
    // http://eslint.org/docs/rules/no-magic-numbers
    'no-magic-numbers'     : [ 'warn', {
      ignore             : [],
      ignoreArrayIndexes : true,
      enforceConst       : true,
      detectObjects      : false,
    } ],
    // disallow use of multiple spaces
    'no-multi-spaces'      : 'warn',
    // disallow use of multiline strings
    'no-multi-str'         : [ 'warn', {
      ignoreEOLComments : true,
      exceptions        : {
        // allow spacing to align object properties
        Property            : true,
        // allow spacing to align equals signs in declarations
        VariableDeclarator  : true,
        // allow spacing to align `from` in imports
        ImportDeclaration   : true,
      },
    } ],
    // disallow reassignments of native objects
    'no-native-reassign'   : 'error',
    // disallow use of new operator when not part of the assignment or
    // comparison
    'no-new'               : 'error',
    // disallow use of new operator for Function object
    'no-new-func'          : 'error',
    // disallows creating new instances of String, Number, and Boolean
    'no-new-wrappers'      : 'error',
    // disallow use of (old style) octal literals
    'no-octal'             : 'error',
    // disallow use of octal escape sequences in string literals, such as
    // var foo = 'Copyright \251';
    'no-octal-escape'      : 'error',
    // disallow reassignment of function parameters
    'no-param-reassign'    : 'error',
    // disallow use of process.env - All the env reading should happen
    // in one place, preferably in a configuration library, and in
    // that one place you can override this.
    'no-process-env'       : 'off',
    // disallow usage of __proto__ property
    'no-proto'             : 'error',
    // disallow declaring the same variable more then once
    'no-redeclare'         : 'error',
    // disallow certain syntax forms
    'no-restricted-syntax' : [ 'error', ...[
      {
        selector    : 'DebuggerStatement',
        message     : 'Do not commit code that includes `debugger`.',
      },
      {
        selector    : 'LabeledStatement',
        message     : [
          'Labelled statements generally mean you need to',
          'think more about your flow control situation.',
        ],
      },
      {
        selector    : 'ForInStatement',
        message     : [
          'The `for ... in` statement can be problematic, since it`,
          'includes inherited properties.  You probably want either',
          '`for...of` or something like `_.each` instead.',
        ],
      },
    ].map( x => {
      if ( Array.isArray( x.message ) ) x.message = x.message.join( ' ' );
      return x;
    } ) ],
    // disallow use of assignment in return statement
    'no-return-assign'             : 'off',
    // disallow use of `javascript:` urls.
    'no-script-url'                : 'error',
    // disallow comparisons where both sides are exactly the same
    'no-self-compare'              : 'error',
    // disallow use of comma operator
    'no-sequences'                 : 'error',
    // restrict what can be thrown as an exception
    'no-throw-literal'             : 'error',
    // disallow unmodified conditions of loops
    'no-unmodified-loop-condition' : 'off',
    // disallow return/throw/break/continue inside finally blocks
    'no-unsafe-finally'            : 'error',
    // disallow usage of expressions in statement position
    'no-unused-expressions'        : 'warn',
    // disallow unused labels
    'no-unused-labels'             : 'warn',
    // disallow unnecessary .call() and .apply()
    'no-useless-call'              : 'warn',
    // disallow useless string concatenation
    'no-useless-concat'            : 'warn',
    // disallow unnecessary string escaping
    'no-useless-escape'            : 'warn',
    // disallow use of void operator
    'no-void'                      : 'error',
    // disallow usage of configurable warning terms in comments: e.g. todo
    'no-warning-comments'          : 'off',
    // disallow use of the with statement
    'no-with'                      : 'error',
    // require use of the second argument for parseInt()
    'radix'                        : [ 'warn', 'as-needed' ],
    // requires to declare all vars on top of their containing scope
    'vars-on-top'                  : 'error',
    // require immediate function invocation to be wrapped in parentheses
    'wrap-iife'                    : [ 'error', 'outside' ],
    // require or disallow Yoda conditions
    'yoda'                         : [ 'warn', 'never' ],
    // don't allow awaiting inside a loop
    'no-await-in-loop'             : 'warn',
    // disallow bitwise operations (which are probably typos)
    'no-bitwise'                   : 'warn',
    // don't allow assignments to global variables
    'no-global-assign'             : 'error',
    // warn for mixes of operators without parens
    'no-mixed-operators'           : 'warn',
    // return await inside an async function is useless
    'no-return-await'              : 'off',
    // Require that for-loops advance their counter in the right
    // direction
    'for-direction'                : 'warn',
    // Require getter functions to return a value
    'getter-return'                : 'error',
    // Warn about files that contain more than one class- Doesn't work
    'max-classes-per-file'         : 'off',
    // Including /u to enable unicode support *also* disables the
    // "Annex B extensions".  These extensions make regexps tolerant
    // of syntax errors, which makes regexp problems harder to find,
    // so disabling them is a good thing, and promotes many regexp
    // syntax errors to compile-time errors, rather than run-time.
    'require-unicode-regexp'       : 'warn',
    // prefer object-spread over Object.assign
    'prefer-object-spread'         : 'warn',
    // Warn when functions get to be too complex
    'max-lines-per-function'       : [ 'warn', 100 ],
    'complexity'                   : [ 'warn', 11 ],
  },
};
