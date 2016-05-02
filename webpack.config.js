var webpack = require("webpack");

module.exports = {
    entry: {
        "vendor": "./client/app/vendor",
        "app": "./client/app/boot"
    },
    output: {
        path: __dirname,
        filename: "./dist/bundles/[name].bundle.js"
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.ts/,
                loaders: ['ts-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"./dist/bundles/vendor.bundle.js")
    ],
    htmlLoader: {
        minimize: true,
        removeAttributeQuotes: false,
        caseSensitive: true,
        customAttrSurround: [[/#/, /(?:)/], [/\*/, /(?:)/], [/\[?\(?/, /(?:)/]],
        customAttrAssign: [/\)?\]?=/]
    }
}