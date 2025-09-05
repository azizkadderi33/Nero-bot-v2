const { colors } = require('../SystemLog/colors.js');
const characters = '';

// الآن getCurrentTime لا ترجع الوقت
const getCurrentTime = () => '';

function logError(prefix, message) {
	if (message === undefined) {
		message = prefix;
		prefix = "ERROR";
	}
	process.stderr.write(`\r${getCurrentTime()} ${colors.redBright(`${characters} ${prefix}:`)} ${message}\n`);
}

module.exports = {
	err: logError,
	error: logError,
	warn: function (prefix, message) {
		if (message === undefined) {
			message = prefix;
			prefix = "WARN";
		}
		process.stderr.write(`\r${getCurrentTime()} ${colors.yellowBright(`${characters} ${prefix}:`)} ${message}\n`);
	},
	info: function (prefix, message) {
		if (message === undefined) {
			message = prefix;
			prefix = "INFO";
		}
		process.stderr.write(`\r${getCurrentTime()} ${colors.greenBright(`${characters} ${prefix}:`)} ${message}\n`);
	},
	succes: function (prefix, message) {
		if (message === undefined) {
			message = prefix;
			prefix = "SUCCES";
		}
		process.stderr.write(`\r${getCurrentTime()} ${colors.cyanBright(`${characters} ${prefix}:`)} ${message}\n`);
	},
	master: function (prefix, message) {
		if (message === undefined) {
			message = prefix;
			prefix = "MASTER";
		}
		process.stderr.write(`\r${getCurrentTime()} ${colors.hex("#eb6734", `${characters} ${prefix}:`)} ${message}\n`);
	}
};
