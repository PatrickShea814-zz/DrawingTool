var Promise = require('bluebird');

var commands = require('./commands').commands;

var readFile = Promise.promisify(require("fs").readFile);

function splitLines(data) {
    return data.toString().split('\n');
}

var main = function main(argv) {
    var fileName = argv[2];
    return readFile(fileName)
        .then(splitLines)
        .then(commands);
};

module.exports = main;
