'use strict';

import { build, type BuildOptions, context } from 'esbuild';
import { existsSync } from 'node:fs';

const entryPoint: undefined | string = [
	'src/jotunheim.ts'
]
	.find(
		( filePath: string ): boolean => existsSync( filePath )
	);

if ( undefined === entryPoint )
{
	throw new Error( 'Jotunheim entry point does not exist.' );
}

const buildOptions: BuildOptions = {
	entryPoints: [
		entryPoint
	],
	outfile:     'dist/jotunheim.js',
	bundle:      true,
	format:      'esm',
	platform:    'browser',
	target:      'es2023',
	keepNames:   true,
	treeShaking: false,
	minify:      false,
	sourcemap:   false
};

if ( process.argv.includes( '--watch' ) )
{
	const buildContext = await context(
		{
			...buildOptions,
			logLevel: 'info'
		}
	);

	await buildContext.watch();
}
else
{
	await build( buildOptions );
}
