import * as webpack from 'webpack';
import { resolve, join } from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
    entry: './src/index.js',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'app.[hash].js',
        publicPath: '/'
    },
    devServer: {
        contentBase: join(__dirname, "dist"),
        compress: true,
        port: 9000
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Mithril starter',
            filename: 'index.html'
        })
    ]
};

export default config;