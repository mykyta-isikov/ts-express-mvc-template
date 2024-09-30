/* eslint-disable @typescript-eslint/no-require-imports */

const globals = require('globals');
const pluginJs = require('@eslint/js');
const tseslint = require('typescript-eslint');

// import globals from 'globals';
// import pluginJs from '@eslint/js';
// import tseslint from 'typescript-eslint';

module.exports = [
    { files: [ '**/*.{mjs,cjs,ts}' ] },
    { ignores: [ 'dist/*', 'node_modules/*' ] },
    { languageOptions: { globals: globals.node } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        rules: {
            'indent': [ 'error', 4 ],
            'quotes': [ 'error', 'single', { avoidEscape: true, allowTemplateLiterals: true } ],
            'object-curly-spacing': [ 'error', 'always' ],
            'array-bracket-spacing': [ 'error', 'always' ],
            'space-in-parens': [ 'error', 'never' ],
            'arrow-spacing': [ 'error', { before: true, after: true } ],
            'semi': [ 'error', 'always' ],
            'comma-spacing': [ 'error', { before: false, after: true } ],
            'space-before-blocks': [ 'error', 'always' ],
            'space-before-function-paren': [ 'warn', 'never' ],
            'keyword-spacing': [ 'error', { after: true } ]
        },
    },
];
