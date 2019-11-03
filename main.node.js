const fs = require('fs');
const jsdom = require('jsdom');

/**
 * ES Modulesテストのテンプレートを作る
 */
exports.createTester = function(dir) {
	console.error('not impl yet');
	return ;
	if(dir instanceof String) {
		let document = jsdom.jsdom(dir + "index.html");
		document
		.querySelector('#onp-test-list')
		.forEach(function(e) {
			e.textValue;
			fs.createWriteStream();
		});

		let htmltempl = '<meta charset="UTF-8">'
		+ '<title>' + '</title>'
		+ '<script type="module" src="' + '.mod.js"></script>'
		+ '<div id="onp-tester"></div>';

		let temp = "import * as p from '" + "';"
		+ "import * as tester from 'https://open-novel.github.io/tools/onp-tester.mod.js';"
		+ "tester.begin();"
		+ "tester.end();";
	}
}