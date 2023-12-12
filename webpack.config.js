const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
// in package.json:   "proxy": "http://localhost:5000",

module.exports = {
    mode: "development",

    // entry point of our application
    entry: {
        src: './client/src/index.js',
    },

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './client/dist'),
    },
    
    devServer: {
        port: 3000,
        proxy: {
            "/**": 5000
        },
        open: false,
        liveReload: true,
        historyApiFallback: true,
    },
    // resolver helps webpack find the module code that needs to be included in the bundle for every such require/import statement
    resolve: {
        extensions: [".js", ".jsx", ".json"],
    },

    plugins: [
        new HTMLWebpackPlugin({
            title: 'Development',
            template: './client/src/index.html'
        })
    ],

    module: {
        rules: [
            {
                test:  /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader', // babel-loader translates JSX to regular JS
                options: {
                    presets: ['@babel/env', '@babel/react']
                }
            },

            { // remember to npm i sass --D and  npm add style-loader css-loader sass-loader
                test: /\.s?css/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            }        
        ]
    }
}