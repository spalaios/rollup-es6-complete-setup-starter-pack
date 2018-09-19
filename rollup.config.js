import babel from 'rollup-plugin-babel';
export default {
    input : 'src/modules/main.js',
    output : {
        file : './build/bundle.js',
        format : 'iife'
    },
    moduleName : 'Linux',
    plugins : [
        babel({
            exclude: 'node_module/**'
        })
    ]
};