const path = require('path');

module.exports = {
	lintOnSave: false,
	chainWebpack: config => {
		config.resolve.alias.set('@', path.resolve(__dirname, 'src'));
		config.resolve.alias.set('@Assets', path.resolve(__dirname, 'src/assets'));
	},
	css: {
		loaderOptions: {
			sass: {
				prependData: `
        @import "@/assets/scss/global.scss";
        `
			}
		}
	}
};