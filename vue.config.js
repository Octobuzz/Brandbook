const path = require('path');

module.exports = {
	lintOnSave: false,
	chainWebpack: config => {
		config.resolve.alias.set('@', path.resolve(__dirname, 'src'));
		config.resolve.alias.set('@Assets', path.resolve(__dirname, 'src/assets'));
		config.module.rule('downloads')
		// bundle common document files
			.test(/\.(zip)(\?.*)?$/)
			.use('file-loader')
		  // use the file-loader
		  	.loader('file-loader')
		  // bundle into the "downloads" directory
		 	.options({ name: 'downloads/[name].[hash:8].[ext]' });
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