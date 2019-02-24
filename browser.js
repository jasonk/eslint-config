module.exports = {
  extends : [
    './core',
  ].map( require.resolve ),
  env     : { browser : true },
};
