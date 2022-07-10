const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        hot: true,
        open: true,
    },
    plugins: [
        new ReactRefreshWebpackPlugin()
    ],
}