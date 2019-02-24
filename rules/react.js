module.exports = {
  // https://github.com/yannickcr/eslint-plugin-react
  plugins       : [ 'react' ],
  extends       : [ 'plugin:react/recommended' ],
  parserOptions : {
    ecmaFeatures : { 'jsx' : true },
  },
  settings      : {
    react     : {
      version               : 'detect',
      propWrapperFunctions  : [
        'forbidExtraProps',
        { property : 'freeze', object : 'Object' },
      ],
      linkComponents        : [
        { name : 'Link', linkAttribute : 'to' },
        { name : 'NavLink', linkAttribute : 'to' },
      ],
    },
  },
};
