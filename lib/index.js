var through = require('through2');
module.exports = function (file) {
	return through(function (buf, enc, next) {
		this.push(buf.toString('utf8').replace(/process\.browser/g, 'true'));
		next();
	});
};