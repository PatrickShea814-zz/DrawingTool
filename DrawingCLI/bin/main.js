var Promise = require('bluebird');

var processCommands = require('./commands').processCommands;

var readFile = Promise.promisify(require("fs").readFile);

function splitLines(data) {
    return data.toString().split('\n');
}

var main = function main(argv) {
    var fileName = argv[2];
    return readFile(fileName)
        .then(splitLines)
        .then(processCommands);
};

module.exports = main;
