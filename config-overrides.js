const { override, fixBabelImports, addLessLoader, addPostcssPlugins } = require('customize-cra');
 
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        libraryDirectory: 'es',
        style: 'css',
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1DA57A' },
    }),
    addPostcssPlugins([require('postcss-pxtorem')({
        rootValue: 100,
        propList: ['*']
        // propList: ['*', '!border*', '!font-size*', '!letter-spacing'],
        // propWhiteList: []
    }),])
);