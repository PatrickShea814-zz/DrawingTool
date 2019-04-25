const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
var inquirer = require("inquirer");


var createCanvas = require('./lib/canvas').createCanvas;
var clearCanvas = require('./lib/canvas').clearCanvas;
var createLine = require('./lib/line');
var createRectangle = require('./lib/rectangle');
var bucketFill = require('./lib/bucket');

clear();
console.log(
    chalk.yellow(
        figlet.textSync('Drawing Tool', { horizontalLayout: 'full' })
    ));
console.log('Welcome to my Drawing Tool');
console.log('------------------');
console.log('Below are the available drawing tools.');
console.log('------------------');
module.exports = {
    commands: inquirer.prompt([
        {
            type: "list",
            name: "toolCommands",
            message: "What drawing tool would you like to use?",
            choices: ["Create Canvas", "Draw Line 1", "Draw Line 2", "Draw Rectangle", "Bucket Fill", "Clear Canvas"]
        }
    ]).then(function (command, screenBuffer) {
        if (command.toolCommands === "Create Canvas") {
            let commandTools = command.toolCommands.split('')[0];
            console.log(commandTools);
            screenBuffer = createCanvas(commandTools, screenBuffer);
            return screenBuffer;
        }
        else if (command.toolCommands === "Draw Line 1") {
            let commandTools = command.toolCommands.split('')[0];
            console.log(commandTools);
            screenBuffer = createLine(commandTools, screenBuffer);
            return screenBuffer;
        }
        else if (command.toolCommands === "Draw Line 2") {
            let commandTools = command.toolCommands.split('')[0];
            console.log(commandTools);
            screenBuffer = createLine(commandTools, screenBuffer);
            return screenBuffer;
        }
        else if (command.toolCommands === "Draw Rectangle") {
            let commandTools = command.toolCommands.split('')[0];
            console.log(commandTools);
            screenBuffer = createRectangle(commandTools, screenBuffer);
            return screenBuffer;
        }
        else if (command.toolCommands === "Bucket Fill") {
            let commandTools = command.toolCommands.split('')[0];
            console.log(commandTools);
            screenBuffer = bucketFill(commandTools, screenBuffer);
            return screenBuffer;
        }
        else {
            let commandTools = command.toolCommands.split('')[0];

            screenBuffer = clearCanvas(commandTools, screenBuffer);
            return screenBuffer;
        }
    })
};

function printScreenBuffer(screenBuffer) {
    screenBuffer.map(function (state) {
        state.map(function (line) {
            console.log(line.join(''));
        });
    });
    return screenBuffer;
}

function error(message) {
    console.log('Error', message);
    process.exit(1);
}