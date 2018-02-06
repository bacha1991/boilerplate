const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const { isProd } = require('./src/shared/util');
const { WDS_PORT } = require('./src/shared/config');

module.exports = {
	entry: './src',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: isProd ? '/static/' : `http://localhost:${WDS_PORT}/dist/`,
	},
	devtool: isProd ? false : 'inline-source-map',
	devServer: {
		port: WDS_PORT,
	    headers: {
	      'Access-Control-Allow-Origin': '*',
	    },	
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader'
				}
			}
		],
	},
	plugins: [
	    new webpack.optimize.OccurrenceOrderPlugin(),
	    new webpack.HotModuleReplacementPlugin(),
	    new webpack.NamedModulesPlugin(),
	    new webpack.NoEmitOnErrorsPlugin(),
	],
	resolve: {
		extensions: ['.js', '.jsx'],
	},
    target: 'node', // in order to ignore built-in modules like path, fs, etc. 
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder 
};