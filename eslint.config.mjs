'use strict';

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	{
		ignores: [
			'dist/**',
			'node_modules/**',
			'public/**',
			'vendor/**',
			'src/**/*.js'
		]
	},
	{
		files: [
			'src/**/*.ts',
			'scripts/**/*.ts'
		],
		extends: [
			eslint.configs.recommended,
			...tseslint.configs.strictTypeChecked
		],
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname
			}
		},
		rules: {
			'no-undef': 'off',
			'@typescript-eslint/consistent-type-imports': 'error',
			'@typescript-eslint/explicit-function-return-type': 'error',
			'@typescript-eslint/explicit-module-boundary-types': 'error',
			'@typescript-eslint/no-explicit-any': 'error',
			'@typescript-eslint/no-non-null-assertion': 'error',
			'@typescript-eslint/strict-boolean-expressions': 'error',
			'@typescript-eslint/switch-exhaustiveness-check': 'error'
		}
	}
);
