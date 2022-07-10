const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const dist = path.resolve(__dirname, '../dist');

module.exports = {
    entry: './src/index.tsx',
    stats: {
        errorDetails: true,
        children: true
    },
    output: {
        path: dist,
        filename: 'bundle.js',
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s?css$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
        ],
    },
    optimization: {
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false,
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: path.resolve(__dirname, '../public/index.html')
        })
    ]
};