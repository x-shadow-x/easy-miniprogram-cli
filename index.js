// babel解析
require( "babel-register" );
require( "babel-core" ).transform( "code");
require( 'babel-polyfill' );

require('./src');