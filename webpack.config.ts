import dotenv from 'dotenv';
import path from 'path';
import webpack from 'webpack';

import CompressionPlugin from 'compression-webpack-plugin';
import HtmlWebPackPlugin from 'html-webpack-plugin';

interface Rule {
    exclude?: (RegExp | string)[];
    test: RegExp;
    use: {
        loader: string;
        options?: { plugins: string[] };
    };
}

interface WebpackConfig {
    output: { publicPath: string };
    devServer: { historyApiFallback: boolean };
    entry: string[];
    resolve: { extensions: string[] };
    mode: string;
    module: {
        rules: Rule[];
    };
    plugins: any[];
}

const objectify = (string: string, i: number): string => string.split('=')[i];

export default (args: string[]): WebpackConfig => {
    const { NODE_ENV, ...commandVariables } = args
        .map(arg => ({ [objectify(arg, 0)]: objectify(arg, 1) }))
        .reduce((acc, cur) => ({ ...acc, ...cur }), {});

    const envVariables = dotenv.config({ path: `${path.join(__dirname)}/.env.${NODE_ENV}` }).parsed || {};

    return {
        output: {
            publicPath: '/',
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
            new webpack.DefinePlugin({ 'process.env': JSON.stringify({ ...envVariables, ...commandVariables }) }),
        ],
    };
};
