module.exports = {
  plugins : [ 'jsdoc' ],
  rules   : {
    'jsdoc/check-examples'                          : 'warn',
    'jsdoc/check-param-names'                       : 'warn',
    'jsdoc/check-tag-names'                         : 'warn',
    'jsdoc/check-types'                             : 'warn',
    'jsdoc/newline-after-description'               : 'warn',
    // This does not mean "you must have a description", it means "you
    // must have a description with @description before it".
    'jsdoc/require-description'                     : 'off',
    'jsdoc/require-description-complete-sentence'   : 'warn',
    'jsdoc/require-hyphen-before-param-description' : 'warn',
    'jsdoc/require-param'                           : 'warn',
    'jsdoc/require-param-description'               : 'warn',
    'jsdoc/require-param-name'                      : 'warn',
    'jsdoc/require-param-type'                      : 'warn',
    'jsdoc/require-returns-description'             : 'off',
    'jsdoc/require-returns-type'                    : 'off',
    'jsdoc/valid-types'                             : 'warn',
    'jsdoc/no-undefined-types'                      : 'warn',
    'jsdoc/require-example'                         : 'off',
  },
  settings : {
    jsdoc : {
      tagNamePreference : {
        arg       : 'param',
        return    : 'returns',
      },
    },
  },
};
