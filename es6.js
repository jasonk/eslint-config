// * For projects using ES6
module.exports = {
  env           : { es6 : true },
  extends       : [ './es5' ].map( require.resolve ),
  rules         : {
    // enforces no braces where they can be omitted
    // http://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style'        : 'off',
    // require parens in arrow function arguments
    'arrow-parens'            : 'off',
    // require space before/after arrow function's arrow
    // http://eslint.org/docs/rules/arrow-spacing
    'arrow-spacing'           : [ 'error', { before : true, after : true } ],
    // require trailing commas in multiline object literals
    'comma-dangle'            : [ 'error', {
      arrays      : 'always-multiline',
      objects     : 'always-multiline',
      imports     : 'always-multiline',
      exports     : 'always-multiline',
      functions   : 'always-multiline',
    } ],
    // verify super() callings in constructors
    'constructor-super'       : 'error',
    // enforce the spacing around the * in generator functions
    'generator-star-spacing'  : 'error',
    // no modifying variables of class declarations
    // http://eslint.org/docs/rules/no-class-assign
    'no-class-assign'         : 'error',
    // no arrow funcs where they can be confused with comparisons
    // http://eslint.org/docs/rules/no-confusing-arrow
    'no-confusing-arrow'      : [ 'error', { allowParens : true } ],
    // no modifying const variables
    'no-const-assign'         : 'error',
    // no duplicate class members
    // http://eslint.org/docs/rules/no-dupe-class-members
    'no-dupe-class-members'   : 'error',
    // no symbol constructor (use `Symbol()`, not `new Symbol()`)
    // http://eslint.org/docs/rules/no-new-symbol
    'no-new-symbol'           : 'error',
    // restrict certain globals
    'no-restricted-globals'   : 'off',
    // no using this or super before super() has been called
    'no-this-before-super'    : 'error',
    // require let or const instead of var
    'no-var'                  : 'error',
    // no useless computed property keys
    // http://eslint.org/docs/rules/no-useless-computed-key
    'no-useless-computed-key' : 'error',
    // no unnecessary constructor
    // http://eslint.org/docs/rules/no-useless-constructor
    'no-useless-constructor'  : 'error',
    // prefer method and property shorthand syntax for objects
    // http://eslint.org/docs/rules/object-shorthand
    'object-shorthand'        : [ 'error', 'always' ],
    // suggest using arrow functions as callbacks
    'prefer-arrow-callback'   : [ 'warn', {
      allowNamedFunctions : true,
      allowUnboundThis    : true,
    } ],
    // suggest using of const declaration for variables that are never
    // modified after declared
    'prefer-const'           : 'warn',
    // suggest using the spread operator instead of .apply()
    'prefer-spread'          : 'warn',
    // suggest using Reflect methods where applicable
    'prefer-reflect'         : 'off',
    // use rest parameters instead of arguments
    // http://eslint.org/docs/rules/prefer-rest-params
    'prefer-rest-params'     : 'warn',
    // suggest using template literals instead of string concatenation
    // http://eslint.org/docs/rules/prefer-template
    'prefer-template'        : 'warn',
    // require generator functions to yield
    'require-yield'          : 'error',
    // enforce usage of spacing in template strings
    // http://eslint.org/docs/rules/template-curly-spacing
    'template-curly-spacing' : 'warn',
    // enforce spacing around the * in yield* expressions
    // http://eslint.org/docs/rules/yield-star-spacing
    'yield-star-spacing'     : [ 'error', 'after' ],
    // enforce spacing between tagged template literals and their
    // templates
    'template-tag-spacing'   : [ 'warn', 'always' ],
  },
};
