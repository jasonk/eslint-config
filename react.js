module.exports = {
  extends : [
    './babel',
    './browser',
    './core',
    './rules/react',
    './rules/react-a11y',
  ].map( require.resolve ),
};
