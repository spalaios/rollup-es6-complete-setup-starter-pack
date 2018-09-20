import babel from 'rollup-plugin-babel';
import { eslint } from 'rollup-plugin-eslint';

export default {
    input : 'src/modules/main.js',
    output : {
        file : './build/bundle.js',
        format : 'iife',
        name: 'Suraj',
        sourcemap: true,
    },
    plugins : [
        babel({
            exclude: 'node_module/**',
        }),
        eslint(),
    ]
};