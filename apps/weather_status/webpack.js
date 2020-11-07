const path = require('path')

module.exports = {
	entry: {
		'weather-status': path.join(__dirname, 'src', 'weather-status')
	},
	output: {
		path: path.resolve(__dirname, './js'),
		publicPath: '/js/',
		filename: '[name].js?v=[chunkhash]',
	},
}
