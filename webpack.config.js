const dotenv = require('dotenv');
const path = require('path');
const webpack = require('webpack');

const CompressionPlugin = require("compression-webpack-plugin");
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = ({ NODE_ENV }) => {
    const envVars = dotenv.config({ path: `${path.join(__dirname)}/.env.${NODE_ENV}` }).parsed;
    return {
        output: {
            publicPath: '/'
        },
        devServer: {
            historyApiFallback: true,
        },
        entry: ['./src/index.tsx'],
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json'],
        },
        mode: NODE_ENV,
        module: {
            rules: [
                {
                    exclude: [/node_modules/, /\.(spec|test).(tx|tsx)?$/],
                    test: /\.(js|jsx|ts|tsx)$/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            plugins: [
                                '@babel/plugin-proposal-nullish-coalescing-operator',
                                '@babel/plugin-proposal-optional-chaining',
                                '@babel/plugin-transform-regenerator', 
                                '@babel/plugin-transform-runtime',
                            ],
                        },
                    },
                },
                {
                    test: /\.html$/,
                    use: {
                        loader: 'html-loader',
                    },
                },
                {
                    test: /\.(png|jpe?g|gif|(woff|ttf|eot|svg))$/,
                    use: {
                        loader: 'file-loader',
                    },
                },
            ],
        },
        plugins: [
            new CompressionPlugin(),
            new HtmlWebPackPlugin({
                template: './src/index.html',
                filename: './index.html',
            }),
            new webpack.DefinePlugin({ 'process.env': JSON.stringify(envVars) }),
        ],
    };
};
