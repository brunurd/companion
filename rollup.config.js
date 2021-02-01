import pkg from './package.json';
import { terser } from 'rollup-plugin-terser';
import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import autoPreprocess from 'svelte-preprocess';

const production = !process.env.ROLLUP_WATCH;

export default [
  {
    input: 'src/main/main.js',
    output: [
      {
        file: 'public/main.min.js',
      },
    ],
    external: [...Object.keys(pkg.dependencies || {})],
    plugins: [terser()],
  },
  {
    input: 'src/main/preload.js',
    output: [
      {
        file: 'public/preload.min.js',
      },
    ],
    external: [...Object.keys(pkg.dependencies || {})],
    plugins: [terser()],
  },
  {
    input: 'src/renderer/index.js',
    output: {
      sourcemap: true,
      format: 'iife',
      name: 'app',
      file: 'public/build/bundle.js',
    },
    plugins: [
      svelte({
        dev: !production,
        preprocess: autoPreprocess(),
        css: (css) => {
          css.write('bundle.css');
        },
      }),

      resolve({
        browser: true,
        dedupe: ['svelte'],
      }),
      commonjs(),
      !production && serve(),
      !production && livereload('public'),
      production && terser(),
    ],
    watch: {
      clearScreen: false,
    },
  },
];

function serve() {
  let started = false;

  return {
    writeBundle() {
      if (!started) {
        started = true;

        require('child_process')
          .spawn('npm', ['run', 'svelte', '--', '--dev'], {
            stdio: ['ignore', 'inherit', 'inherit'],
            shell: true,
          });
      }
    },
  };
}
