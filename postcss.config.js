// Packages
const autoprefixer = require('autoprefixer');
const cssimport = require('postcss-import');

module.exports = {
	plugins: [cssimport({ path: 'assets/css' }), autoprefixer]
};
