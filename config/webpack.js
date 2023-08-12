const path = require( 'path' );

module.exports = [
	{
		mode:    'development',
		devtool: false,
		entry:   './src/Jotunheim.js',
		output:  {
			filename: 'jotunheim.dev.js',
			path:     path.resolve( __dirname, '../dist' )
		}
	},
	{
		mode:    'production',
		entry:   './src/Jotunheim.js',
		output:  {
			filename: 'jotunheim.js',
			path:     path.resolve( __dirname, '../dist' )
		}
	}
];
