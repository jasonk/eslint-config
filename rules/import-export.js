module.exports = {
  env     : { node : true, es6 : true },
  plugins : [ 'import' ],
  rules   : {

    // require imports to be at the top, since they are hoisted
    'import/first'                 : 'error',
    // require modules to be unambiguously identifiable
    'import/unambiguous'           : 'off',
    // use `import foo` not `import { default as foo }`
    'import/no-named-default'      : 'error',

    // forbid invalid exports, e.g. multiple defaults
    'import/export'                     : 'error',
    // ensure default import coupled with default export
    'import/default'                    : 'off',
    // Ensure consistent use of file extension within the import path
    'import/extensions'                 : 'off',
    // ensure named imports coupled with named exports
    'import/named'                      : 'off',
    // ensure names exist at the time they are dereferenced
    'import/namespace'                  : 'off',
    // Don't allow importing from packages not declared in
    // package.json
    'import/no-extraneous-dependencies' : [ 'error', {
      devDependencies      : false, // error when importing devDependencies
      optionalDependencies : false, // error when importing optionalDeps
    } ],
    // ensure imports point to files/modules that can be resolved
    'import/no-unresolved'               : [ 'error', { commonjs : true } ],
    // do not allow a default import name to match a named export
    'import/no-named-as-default'         : 'off',
    // no AMD require/define
    'import/no-amd'                      : 'error',
    // non-import statements can't appear before import statements
    'import/imports-first'               : 'error',
    // no duplicate imports
    'import/no-duplicates'               : 'error',
    // forbid use of imports marked deprecated by jsdoc comments
    'import/no-deprecated'               : 'error',
    // no namespace imports
    'import/no-namespace'                : 'off',
    // warn on accessing default export property names that are also
    // named exports
    'import/no-named-as-default-member'  : 'error',
    // No Node.js builtin modules
    'import/no-nodejs-modules'           : 'off',
    // Enforce a convention in module import order
    'import/order'                       : 'off',
    // Require a newline after the last import/require in a group
    'import/newline-after-import'        : "error",
    // Forbid mutable exports
    'import/no-mutable-exports'          : 'error',
    // Allow for anonymous default exports
    'import/no-anonymous-default-export' : 'warn',

    // require an empty line after the imports
    'import/newline-after-import'        : 'error',

    // don't allow import to have absolute paths
    'import/no-absolute-path'            : 'error',

    // disallow importing from the same path more than once
    // http://eslint.org/docs/rules/no-duplicate-imports
    'no-duplicate-imports'               : 'error',

    // disallow specific imports
    // http://eslint.org/docs/rules/no-restricted-imports
    'no-restricted-imports'              : 'off',

    // import sorting
    // http://eslint.org/docs/rules/sort-imports
    'sort-imports'                       : 'off',

    // disallow webpack loader syntax
    'import/no-webpack-loader-syntax'    : 'error',
    // require dynamic imports to specify webpackChunkName
    'import/dynamic-import-chunkname'    : 'off',

    // Warn when files have multiple exports in different locations..
    'import/group-exports'               : 'off',

    // Importing yourself is an error..
    'import/no-self-import'              : 'error',

    // Make sure we are importing with the minimum path segments
    'import/no-useless-path-segments'   : 'error',

    'import/max-dependencies'           : 'off',
    'import/no-commonjs'                : 'off',
    'import/no-dynamic-require'         : 'off',
    'import/no-internal-modules'        : 'off',
    'import/no-unassigned-import'       : 'off',
    'import/prefer-default-export'      : 'off',
    'import/no-cycle'                   : 'off',
    'import/no-relative-parent-imports' : 'off',
    'import/no-restricted-paths'        : 'off',
    'import/no-default-export'          : 'off',
    'import/exports-last'               : 'off',
  },
};
