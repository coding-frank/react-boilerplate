const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: "./src/App.js",
	output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
		clean: true,
		//publicPath: "/public/"
  },
	devtool: "eval-cheap-module-source-map",
	devServer: {
    // proxy: { // proxy URLs to backend development server
    //   '/api': 'http://localhost:3000'
    // },
		static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 5000,
    compress: true, 
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, 
    https: false, 
  },
	target: "web", 
  module: {
    rules: [
			{
        test: /\.js$/i,
        use: "babel-loader",
				exclude: /node_modules/
      },
      {
        test: /\.html$/i,
        use: "html-loader",
      },
			{
				test: /\.(s[ac]|c)ss$/i,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							sourceMap: true,
						},
					},
					{
						loader: 'sass-loader',
						options: { sourceMap: true },
					},
				],
			}
    ],
  },
	plugins: [
    new HtmlWebpackPlugin({  
			title: 'My React Example',
      filename: 'index.html',
      template: './public/index.html',
			inject: true
    })
  ],
	
};