// * For browser-based projects.
module.exports = {
  extends : [ './index' ].map( require.resolve ),
  env     : { browser : true },
};
