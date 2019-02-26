import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'
import json from 'rollup-plugin-json'

import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    babel({
      exclude: 'node_modules/**',
    }),
    resolve(),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/react-is/index.js': [
          'isForwardRef',
          'isValidElementType',
        ],
      },
    }),

    json({
      include: 'package.json',
      preferConst: true,
      compact: true,
    }),
  ],
}
