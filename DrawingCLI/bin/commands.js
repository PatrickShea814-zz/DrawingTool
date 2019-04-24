
var createCanvas = require('../lib/canvas');
var createLine = require('../lib/line');
var createRectangle = require('../lib/rectangle');
var bucketFill = require('../lib/bucket');

module.exports = {
    processCommands: function processCommands(commands, screenBuffer) {
        screenBuffer = screenBuffer || [[]];

        return commands
            .filter(function (command, index) {
                var commandTools = command.trim().split(' ');
                switch (commandTools[0]) {
                    case 'C':
                    case 'L':
                    case 'R':
                    case 'B':
                        return true;
                    case '':
                        return false;
                    default:
                        console.log('Invalid command Line ' + (index + 1) + ': "' + commandTools[0] + '" is not a valid command');
                        return false;
                }
            })
            .map(function (command, index) {
                var commandTools = command.trim().split(' '); //ignore whitespaces
                switch (commandTools[0]) {
                    case 'C':
                        screenBuffer = createCanvas(commandTools, screenBuffer);
                        return screenBuffer;
                    case 'L':
                        screenBuffer = createLine(commandTools, screenBuffer);
                        return screenBuffer;
                    case 'R':
                        screenBuffer = createRectangle(commandTools, screenBuffer);
                        return screenBuffer;
                    case 'B':
                        screenBuffer = bucketFill(commandTools, screenBuffer);
                        return screenBuffer;
                    default:
                        return screenBuffer;
                }
            });
    }
};