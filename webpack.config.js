var path = require("path");
var webpack = require("webpack")

module.exports = {
    entry: "./src/scripts/entry.js",
    output: {
        path: __dirname + '/src/scripts/',
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style!css"
        }, {
            loader: 'babel-loader'
        }]
    },
    resolve: {
        root: [path.join(__dirname, "bower_components")]
    },
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        )
    ]
};
