const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
var inquirer = require("inquirer");

clear();
console.log(
    chalk.yellow(
        figlet.textSync('Drawing Tool', { horizontalLayout: 'full' })
    ));
console.log('Welcome to my Drawing Tool');
console.log('------------------');
console.log('Below are the available drawing tools.');
console.log('------------------');

inquirer.prompt([
    {
        type: "list",
        name: "toolCommands",
        message: "What drawing tool would you like to use?",
        choices: ["Create Canvas", "Draw Line 1", "Draw Line 2", "Draw Rectangle", "Bucket Fill", "Clear Canvas"]
    }
]).then(function (user) {

    if (user.toolCommands === "Create Canvas") {
        console.log("==============================================");
        console.log("Creating Canvas...");
        createCanvas();
        console.log("Canvas Created!");
        console.log("==============================================");
    }
    else if (user.toolCommands === "Draw Line 1") {
        drawLine();
    }
    else if (user.toolCommands === "Draw Line 2") {
        drawLine();
    }
    else if (user.toolCommands === "Draw Rectangle") {
        drawRectangle();
    }
    else if (user.toolCommands === "Bucket Fill") {
        bucketFill();
    }
    else {

    }
});


var main = require('./bin/main.js');

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

main(process.argv)
    .then(printScreenBuffer)
    .catch(error);