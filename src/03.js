const fs = require('fs');
const rline = require('readline');
const newline = /^win/.test(process.platform) ? '\r\n' : '\n';

const LEVEL = [
	'EMERGENCY', 
	'ALERT', 
	'CRITICAL', 
	'ERROR', 
	'WARNING', 
	'NOTICE', 
	'INFORMATIONAL', 
	'DEBUG'
];
class Writer {
	constructor(filename) {
		const opts = {
			flags:'a',
			encoding:'utf8'
		};
		this.file = fs.createWriteStream('.\\file.log', opts);
	}
	write(level, msg) {
		if (typeof msg !== 'string')
			msg = JSON.stringify(msg);
		let line = '[' + (new Date()).toISOString() + '] ' + LEVEL[level] + ': ' + msg;
		console.log(line);
		this.file.write(line + + newline);
	}
}
class Log {
	constructor() {
		if (!Log.instance) {
			Log.instance = this;
            const opts = {
                flags:'a',
                encoding:'utf8'
            };
            this.writer = new Writer('.\\file.log');
		}
		return Log.instance;
	}
	emergency(msg) {
		this.writer.write(0, msg);
	}
	alert(msg) {
		this.writer.write(1, msg);
	}
	critical(msg) {
		this.writer.write(2, msg);
	}
	error(msg) {
		this.writer.write(3, msg);
	}
	warning(msg) {
		this.writer.write(4, msg);
	}
	notice(msg) {
		this.writer.write(5, msg);
	}
	informational(msg) {
		this.writer.write(6, msg);
	}
	debug(msg) {
		this.writer.write(7, msg);
	}
	filter(date, level) {
		const lineReader = rline.createInterface({
			input: fs.createReadStream('.\\file.log')
		});
		lineReader.on('line', function (line) {
			if ((line.indexOf(date) != -1) && (line.indexOf(level) != -1))
				console.log(line);
		});
	}
}

module.exports = Log;

/* let a,b;
a = new Log();
a.informational("This is an information about something.");
a.error("We can't divide any numbers by zero.");
a.notice("Someone loves your status.");
a.warning("Insufficient funds.");
a.debug("This is debug message.");
a.alert("Achtung! Achtung!");
a.critical("Medic!! We've got critical damages.");
a.emergency("System hung. Contact system administrator immediately!");
a.filter('2018-04-04','CRITICAL'); */