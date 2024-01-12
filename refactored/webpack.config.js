const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const TerserPlugin = require("terser-webpack-plugin");
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); // creates an interactive treemap visualization of the contents of all your bundles
const dotenv = require('dotenv');
dotenv.config();
const env = dotenv.config().parsed;
const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
}, {});

module.exports = {
    mode: process.env.NODE_ENV,
    entry: [ './client/index.js'], // top file in your React application: renders the app to the DOM -> go in from here so webpack can travel down every other component
    output: { // what to call output folder and the bundled JS file
        path: path.resolve(__dirname, 'build'),
        publicPath: '/', // every url that webpack encounters will be re-written to begin with '/'
        filename: '[name].bundle.js'
    },
    devServer: { // https://webpack.js.org/configuration/dev-server/#devserverproxy
        host: '0.0.0.0', // required for Docker to work with dev server
        port: 8080, // port our webpack dev server is running (the localhost port app will run on once started)
        hot: true, // enables webpack Hot module replacement exchanges, adds, or removes modules while an application is running, without a full reload. to improve performance
        open: true, // automatically open browser after files are bundled
        liveReload: true, // automatically update the app as changes are made
        historyApiFallback: true, // serve your React application on every path (needed for react-router-dom/client side server)
        static: { // specifies the directory webpack will use to serve static files
            directory: path.resolve(__dirname,'public'), 
            publicPath: '/'
        },
        headers: { // resource makes a cross-origin HTTP request when it requests a resource from a different domain/ port than the one itself serves and CORS enables secure cross-domain data transfers
            // Access-Control-Allow-Origin is a CORS (cross-origin resource sharing) header.
            'Access-Control-Allow-Origin': '*' // An Access-Control-Allow-Origin (ACAO) header with a wildcard that allows all domains
        },

        proxy: { // proxy required to make requests to server while using hot-reload webpack server - webpack dev server port: 8080 & server port: 5000
            '/api/**': { // reroutes requests from webpack dev server to the express server: localhost:8080/api/** (WEBPACK) TO localhost:5000/api/** (EXPRESS SERVER)
                target: 'http://localhost:5000/', // express server = target
                pathRewrite: { '^/api': ''} // if you don't rewrite the path then request to /api will be passed on as localhost:5000/api
            }
        }
    },

    module: { // specifies how Webpack handles diff files when building app
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/react'],
                        plugins: ['@babel/plugin-transform-runtime', '@babel/transform-async-to-generator'],
                    },        
                }
            },
            {
                test: /scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ]
    },

    resolve: {
        extensions: [".js", ".jsx", ".json"],
    },

    plugins: [
        new BundleAnalyzerPlugin(),
        // generates html files for bundles - use index.html file in the public folder as a template
        new HtmlWebpackPlugin({
            favicon: path.resolve(__dirname, './client/assets/images/favicon/favicon.ico'),
            template: './public/index.html'
        }),
        new webpack.DefinePlugin(envKeys)
    ], 

    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                minify: TerserPlugin.uglifyJsMinify, // faster than esbuild: https://github.com/privatenumber/minification-benchmarks
            }),
        ], 
        splitChunks: { // code splitting: doesn't reduce the size of your application but divides the React bundle size into chunks which can be lazy loaded as we need them
            chunks: 'all', 
            minSizeReduction: 10000, // min size reduction in bytes to the main chunk (bundle) needed for a chunk to be generated or else bundle doesnt split
            maxSize: 250000 // try to split chunks bigger than 250,000 bytes into smaller parts
        }
    }
};



// webpack config best practices: https://blog.logrocket.com/versatile-webpack-configurations-react-application/
/*
    regex:
        \: is an escape character in this case for .
        |: OR operand
        $: is end of line
*/