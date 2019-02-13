module.exports = ({
    debug = false,
    loose = true,
    useBuiltIns = 'usage',
    include = [],
    useESModules = true,
}) => ({
    presets: [
        [
            require('@babel/preset-env'),
            {
                targets: {
                    node: '0.0.0',
                    firefox: 2,
                },
                ignoreBrowserslistConfig: true,
                loose,
                modules: false,
                useBuiltIns,
                debug,
                forceAllTransforms: true,
                include: include.concat([
                    'es6.object.assign',
                    'transform-spread',
                    'transform-template-literals',
                    'transform-arrow-functions'
                ]),
            },
        ],
    ],
    plugins: [
        [
            require('@babel/plugin-transform-runtime'),
            {
                helpers: true,
                corejs: false,
                loose: true,
                useESModules,
            },
        ],
        [require('@babel/plugin-transform-arrow-functions')],
        [require('babel-plugin-dynamic-import-node')],
        [require('babel-plugin-transform-es3-property-literals')],
        [require('babel-plugin-transform-es3-member-expression-literals')],
    ],
});

