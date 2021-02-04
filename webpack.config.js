const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                loader: 'file-loader',
            },
            {
                test: /\.(js|jsx)/,
                loader: 'babel-loader',
            }
        ],
    },
}