module.exports = {
	entry: './main.js',
	output: {
		path: './',
		filename: 'index.js'
	},
	devServer: {
		inline: true,
		port: 3333		
	},
	module:{
		loaders: [
			{
				test: /\.js$/,

				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			},
			{ test: /\.css$/, loader: "style-loader!css-loader" },
			{ test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/, loader: require.resolve("file-loader") + "?name=../[path][name].[ext]"}
		]
	}
}