const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
var inquirer = require("inquirer");


var createCanvas = require('./lib/canvas');
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
            console.log("==============================================");
            console.log("Creating Canvas...");
            screenBuffer = createCanvas(commandTools, screenBuffer);
            console.log("Canvas Created!");
            console.log("==============================================");
            return screenBuffer;
        }
        else if (command.toolCommands === "Draw Line 1") {
            screenBuffer = createLine(commandTools, screenBuffer);
        }
        else if (command.toolCommands === "Draw Line 2") {
            screenBuffer = createLine(commandTools, screenBuffer);
            return screenBuffer;
        }
        else if (command.toolCommands === "Draw Rectangle") {
            screenBuffer = createRectangle(commandTools, screenBuffer);
            return screenBuffer;
        }
        else if (command.toolCommands === "Bucket Fill") {
            screenBuffer = bucketFill(commandTools, screenBuffer);
            return screenBuffer;
        }
        else {
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