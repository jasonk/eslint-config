/* eslint-disable require-jsdoc, valid-jsdoc, jsdoc/require-param */
/* eslint-disable import/no-extraneous-dependencies */
const _ = require( 'lodash' ),
  path = require( 'path' ),
  nodeResolve = require( 'eslint-import-resolver-node' ).resolve,
  slash = require( 'slash' ),
  pkgup = require( 'pkg-up' ).sync,
  debug = require( 'debug' )( 'jasonk:eslint:resolver' );

exports.interfaceVersion = 2;

function isValidConfig( config ) {
  if ( _.isArray( config ) ) {
    return _.every( config, isValidConfig );
  }
  if ( _.isPlainObject( config ) ) {
    return _.has( config, 'rootPathPrefix' )
      && _.has( config, 'rootPathSuffix' );
  }
  return false;
}

function transform( source, file, suffix, prefix, root ) {
  // debug( 'TRANSFORM', source, file, suffix, prefix, '(' + root + ')' );
  if ( ! _.isString( source ) ) {
    throw new Error( `Invalid source: "${source}"` );
  }
  if ( ! _.isString( file ) ) {
    throw new Error( `Invalid file: "${file}"` );
  }
  // debug( 'SOURCE =', source );
  if ( ! source.startsWith( prefix ) ) return source;

  // Absolute path to the directory that contains the file that is
  // doing the importing
  const origin = path.resolve( root, path.dirname( file ) );
  // debug( 'ORIGIN =', origin );

  // const bare = source.replace( prefix, '.' );
  const bare = source.substring( prefix.length ).replace( /^\/+/gu, '' );
  // debug( 'BARE =', bare );

  // Absolute path to the file that is being imported
  const target = path.resolve( root, suffix, bare );
  // debug( 'TARGET =', target );

  let rel = slash( path.relative( origin, target ) );

  // if the entry ends with a slash, keep it
  if ( source.endsWith( '/' ) ) rel += '/';

  // Make sure it doesn't look like a node_modules import
  if ( ! rel.startsWith( '.' ) ) rel = `./${rel}`;

  // debug( 'REL', rel );
  // debug( '' );
  return rel;
}

function resolve( source, file, config={} ) {
  // debug( 'RESOLVE', source, file, config );
  const isValidConfiguration = isValidConfig( config );
  if ( ! isValidConfiguration ) throw new Error( `Invalid configuration` );

  const options = _.map( _.castArray( config ), item => {
    item.rootPathSuffix = item.rootPathSuffix.replace( /^(\/)|(\/)$/gu, '' );
    return item;
  } );
  for ( const option of options ) {
    if ( ! option._rootPath ) {
      option._rootPath = path.dirname( pkgup( file ) );
    }
    const {
      rootPathPrefix : prefix,
      rootPathSuffix : suffix,
      _rootPath       : root,
    } = option;

    if ( source.startsWith( prefix ) ) {
      const transformed = transform( source, file, suffix, prefix, root );
      return transformed;
    }
  }
  return source;
}

exports.resolve = ( source, file, config ) => {
  const rel = resolve( source, file, config );
  if ( rel.startsWith( config.rootPathPrefix ) ) {
    throw new Error( `Didn't relativize ${source}?` );
  }
  return nodeResolve( rel, file, {} );
};
