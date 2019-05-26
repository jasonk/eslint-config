// * For projects using ES5
module.exports = {
  extends       : [ './index' ].map( require.resolve ),
  parserOptions : { ecmaVersion : 5 },
};
