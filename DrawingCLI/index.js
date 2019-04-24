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

// Created a series of questions
inquirer.prompt([
    {
        type: "list",
        name: "toolCommands",
        message: "What drawing tool would you like to use?",
        choices: ["Create Canvas", "Draw Line 1", "Draw Line 2", "Draw Rectangle", "Bucket Fill", "Clear Canvas"]
    },


]).then(function (user) {

    // If the user guesses the password...
    if (user.toolCommands === "myHouse") {

        console.log("==============================================");
        console.log("Creating Canvas...");

        console.log("Canvas Created!");
        console.log("==============================================");
    } else if (user.toolCommands === "Draw Line 1") {

    } else if (user.toolCommands === "Draw Line 2") {

    } else if (user.toolCommands === "Draw Rectangle") {

    } else if (user.toolCommands === "Bucket Fill") {

    } else {

    }
});