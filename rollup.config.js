import typescript from 'rollup-plugin-typescript';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
    entry: './src/main.ts',
    dest: 'dist/bundle.js',
    format: 'umd',
    sourceMap: 'inline',
    external: ['underscore', 'jquery','bootstrap'],
    plugins: [
        typescript(),
        nodeResolve({ jsnext: true, main: true })
    ],
    globals: {
        jquery: 'jquery',
        //window: 'window',
        underscore: '_'
    }
};