import pkg from './package.json';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'src/main.js',
    output: [
      {
        file: 'public/main.min.js',
        //format: 'cjs',
      },
    ],
    external: [...Object.keys(pkg.dependencies || {})],
    plugins: [terser()],
  },
  {
    input: 'src/preload.js',
    output: [
      {
        file: 'public/preload.min.js',
        //format: 'cjs',
      },
    ],
    external: [...Object.keys(pkg.dependencies || {})],
    plugins: [terser()],
  },
];
