var ExtractTextPlugin = require('extract-text-webpack-plugin');

var node_dir = __dirname + '/node_modules';

module.exports = {
    entry: {
        main: ['./src/main/resources/js/index.js', './src/main/resources/sass/style.scss']
    },
    resolve: {
        alias: {
            'stompjs': node_dir + '/stompjs/lib/stomp.js',
        }
    },
    output: {
        path: __dirname + '/src/main/resources/static',
        filename: 'js/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'css/[name].bundle.css',
            allChunks: true,
        })
    ]
}