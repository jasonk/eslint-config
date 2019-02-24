module.exports = {
  extends : [
    './core',
    './rules/babel',
  ].map( require.resolve ),
  settings  : {
    'import/resolver' : {
      [ require.resolve( './lib/resolver.js' ) ] : {
        rootPathPrefix  : '~',
        rootPathSuffix  : './src',
      },
    },
  },
};
